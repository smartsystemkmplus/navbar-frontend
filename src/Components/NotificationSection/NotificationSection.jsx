/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { Button, Loader, clsx } from "@mantine/core";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import React from "react";
import NoItems from "../Errors/NoItems";

function NotificationItem({ notification }) {
  return (
    <div
      className={`relative flex flex-col gap-[3px] px-4 text-left  rounded-md ${
        notification?.viewed ? "text-darkGrey" : "text-text1"
      }`}
    >
      {!notification?.viewed && (
        <div className="h-2 w-2 bg-primary3 rounded-full absolute left-0 top-1.5" />
      )}
      <p className="text-base font-semibold">
        {notification?.type && (
          <span
            className={
              notification?.viewed ? "text-darkGrey" : "text-primary3"
            }
          >
            {notification?.category}
          </span>
        )}
        {notification?.template && (
          <> &nbsp; {notification?.template}</>
        )}
        {notification?.course_name && (
          <>
            &nbsp;
            <span className={notification?.viewed && "text-darkGrey"}>
              {notification?.course_name}
            </span>
          </>
        )}
      </p>
      <p className="text-darkGrey text-xs font-normal">
        {dayjs(notification?.reminder_at)
          ?.format("MMM D, YYYY ; HH:MM A")
          ?.replace(";", "at")}
      </p>
    </div>
  );
}

export default function NotificationSection({
  title,
  data,
  disabled,
  loading,
  onClickMarkAsRead,
  isScrolling,
  withMarkAsRead,
  classNames = {
    root: "",
    title: "",
  },
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 border rounded-md py-3 px-3 border-bg2",
        classNames.root,
      )}
    >
      <div className="flex justify-between items-center">
        <p
          className={clsx(
            "text-sm font-semibold text-text1",
            classNames.title,
          )}
        >
          {title}
        </p>
        {withMarkAsRead && (
          <div className="flex gap-2">
            <Button
              variant="white"
              size="sm"
              leftIcon={
                <Icon icon="ci:check-all-big" fontSize={24} />
              }
              onClick={onClickMarkAsRead}
              disabled={disabled}
              loading={loading}
              className="p-0 h-fit bg-white"
            >
              Mark as read
            </Button>
          </div>
        )}
      </div>
      <div
        className={`flex flex-col gap-5 ${
          isScrolling && "overflow-y-auto h-[220px] scroll-style-2"
        }`}
      >
        {(() => {
          if (loading) {
            return (
              <div className="m-auto">
                <Loader />
              </div>
            );
          }
          if (!loading && !!data?.length) {
            return data?.map((item, index) => (
              <React.Fragment key={item.id || index}>
                <NotificationItem notification={item} />
              </React.Fragment>
            ));
          }
          return (
            <NoItems
              label="Data tidak ditemukan"
              classNames={{
                label: "text-base",
                icon: "w-[80px] h-[80px]",
              }}
            />
          );
        })()}
      </div>
    </div>
  );
}

NotificationSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClickMarkAsRead: PropTypes.func,
  withMarkAsRead: PropTypes.bool,
  isScrolling: PropTypes.bool,
  classNames: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
  }),
};

NotificationSection.defaultProps = {
  title: "Notifications",
  disabled: false,
  loading: false,
  onClickMarkAsRead: () => null,
  withMarkAsRead: false,
  isScrolling: false,
  classNames: {
    root: "",
    title: "",
  },
};
