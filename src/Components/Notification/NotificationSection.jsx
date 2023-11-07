/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import NiceModal from "@ebay/nice-modal-react";
import { Icon } from "@iconify/react";
import {
  Button,
  Checkbox,
  Loader,
  Menu,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import parse from "html-react-parser";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import {
  BASE_PROXY,
  COURSE_ENDPOINT,
  NOTIFICATION_ENDPOINT,
} from "../../Networks/endpoint";
import { Networks } from "../../Networks/factory";
import { LIST_OF_MONTH_INDONESIA } from "../../Utils/Constants";
import hasRole from "../../Utils/Helpers/hasRole";
import useOnScrollFetch from "../../Utils/Hooks/useOnScrollFetch";
import ChipCarousel from "../CustomInputs/ChipCarousel";
import { getClearableProps } from "../CustomInputs/ClearSearchTextInputMantine";
import MODAL_IDS from "../Modals/modalIds";

dayjs.locale("id");
dayjs.extend(relativeTime);

const listStatus = [
  { label: "Semua", value: "all" },
  { label: "Telah Dibaca", value: "read" },
  {
    label: "Belum Dibaca",
    value: "unread",
  },
];

const upperCaseModule = ["Bast", "Kmap", "Kpi"];

function NotificationSection({ origin, tab, isPage }) {
  const queryClient = useQueryClient();
  const [module, setModule] = useState(null);
  const ref = useRef();

  const notificationService = Networks(BASE_PROXY.notifications);

  const form = useForm({
    initialValues: {
      checkAll: false,
      status: null,
      checkbox: {},
    },
    validate: {},
  });

  const { data: dataModules } = notificationService.query(
    NOTIFICATION_ENDPOINT.GET.notificationModules,
    [`notificationModules${origin}`],
    {
      select: (response) => {
        const modules = (() => {
          let temp = [...(response?.modules || [])];
          if (hasRole(["SBCN"])) {
            temp = temp?.filter?.(
              (item) => item === "Signature" || item === "Course",
            );
          }
          if (hasRole(["VNDR"])) {
            temp = temp?.filter?.(
              (item) =>
                item === "Signature" ||
                item === "Course" ||
                item === "Bast",
            );
          }
          return temp;
        })();
        return modules?.map((item) => ({
          value: item,
          label: upperCaseModule.includes(item)
            ? item.toUpperCase()
            : item,
        }));
      },
      enabled: origin === tab,
    },
    {
      params: {
        origin,
      },
    },
  );

  const {
    data: notifications,
    status,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = notificationService.infiniteQuery(
    NOTIFICATION_ENDPOINT.GET.notifications,
    [`notifications${origin}`, module, origin, form.values.status],
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.totalPage;
        const nextPage = allPages.length + 1;
        return nextPage <= Math.ceil(maxPages) ? nextPage : undefined;
      },
      select: (res) => ({
        totalPage: res?.pages?.[0]?.totalPage,
        pageParams: res?.pageParams,
        totalParticipant: res?.pages?.[0]?.notifications,
        items: res?.pages
          ?.map((page) => page.notifications.map((item) => item))
          .flat(),
      }),
      enabled: origin === tab,
    },
    {
      params: {
        page: 1,
        size: 10,
        origin: origin !== "all" ? origin : null,
        module,
        read:
          form.values.status === "read"
            ? 1
            : form.values.status === "unread"
            ? 0
            : null,
      },
    },
  );

  const { mutate: put } = notificationService.mutation("put", {});
  const { mutate: deleteMutate } = notificationService.mutation(
    "delete",
    {},
  );

  useOnScrollFetch(hasNextPage, fetchNextPage, ref);

  const initialState = useMemo(() => {
    const field = {
      ...form.values,
    };
    const validate = {};
    notifications?.items?.forEach((v) => {
      if (!field.checkbox?.[`notif_${v.notification_id}`]) {
        field.checkbox[`notif_${v.notification_id}`] = false;
      }
    });

    return {
      initialValues: field,
      validate,
    };
  }, [notifications]);

  useEffect(() => {
    form.setValues(initialState.initialValues);
  }, [initialState]);

  const urlLookup = (type, id, data) => {
    const lookupObj = {
      COMMUNITY_ADD_COREMEMBER: {
        payload: `${import.meta.env.VITE_KMS_URL}/communities/${id}`,
        action: "redirect",
      },
      COMMUNITY_AGENDA_ADD_COMITEE: {
        payload: `${import.meta.env.VITE_KMS_URL}/communities/${id}/${
          data || id
        }`,
        action: "redirect",
      },
      COMMUNITY_AGENDA_ADD_NOTETAKER: {
        payload: `${import.meta.env.VITE_KMS_URL}/communities/${id}/${
          data || id
        }`,
        action: "redirect",
      },
      COMMUNITY_AGENDA_ADD_SPEAKER: {
        payload: `${import.meta.env.VITE_KMS_URL}/communities/${id}/${
          data || id
        }`,
        action: "redirect",
      },
      COMMUNITY_REMINDER_AGENDA: {
        payload: `${import.meta.env.VITE_KMS_URL}/communities/${id}/${
          data || id
        }`,
        action: "redirect",
      },
      KMAP_ADD_COLLABORATOR_KMAP: {
        payload: `${import.meta.env.VITE_KMS_URL}/kmap`,
        action: "redirect",
      },
      KMAP_ADD_COLLABORATOR_KMAP_OBJECTIVE: {
        payload: `${import.meta.env.VITE_KMS_URL}/kmap`,
        action: "redirect",
      },
      KMAP_ADD_SME_KMAP: {
        payload: `${import.meta.env.VITE_KMS_URL}/kmap`,
        action: "redirect",
      },
      KMAP_COMMENT_KMAP: {
        payload: `${import.meta.env.VITE_KMS_URL}/kmap`,
        action: "redirect",
      },
      KMAP_COMMENT_KMAP_OBJECTIVE: {
        payload: `${import.meta.env.VITE_KMS_URL}/kmap`,
        action: "redirect",
      },
      REPOSITORY_ADD_COLLABORATOR: {
        payload: `${import.meta.env.VITE_KMS_URL}/repository`,
        action: "redirect",
      },
      SOCIAL_COMMENT_POST: {
        payload: `${import.meta.env.VITE_KMS_URL}/home?post=${data}`,
        action: "redirect",
      },
      SOCIAL_FOLLOW: {
        payload: `${import.meta.env.VITE_KMS_URL}/home/detail/${id}`,
        action: "redirect",
      },
      SOCIAL_LIKE_POST: {
        payload: `${import.meta.env.VITE_KMS_URL}/home?post=${data}`,
        action: "redirect",
      },
      SOCIAL_MENTION: {
        payload: `${import.meta.env.VITE_KMS_URL}/home?post=${data}`,
        action: "redirect",
      },
      SIGNATURE_MANAGEMENT_INVITE: {
        payload: `${
          import.meta.env.VITE_LMS_URL
        }/signature-management`,
        action: "redirect",
      },
      SIGNATURE_MANAGEMENT_EDIT: {
        payload: `${
          import.meta.env.VITE_LMS_URL
        }/signature-management`,
        action: "redirect",
      },
      SIGNATURE_MANAGEMENT_REINVITE: {
        payload: `${
          import.meta.env.VITE_LMS_URL
        }/signature-management`,
        action: "redirect",
      },
      COURSE_PUBLISH_COURSE: {
        payload: `${
          import.meta.env.VITE_LMS_URL
        }/course-pool/course/${data}/standard-information`,
        action: "redirect",
      },
      COURSE_BUY_COURSE: {
        payload: `${import.meta.env.VITE_LMS_URL}/dashboard/${data}`,
        action: "redirect",
      },
      COURSE_CLAIM_REJECTED: {
        payload: data,
        action: "open-modal",
        modalId: MODAL_IDS.DASHBOARD.DECLINE_EXT_COURSE_CLAIM,
        modalProps: { note: data },
      },
    };
    const { payload, action, modalId, modalProps } = lookupObj[type];
    if (action === "redirect") {
      window.location.href = payload;
    }
    if (action === "open-modal") {
      NiceModal.show(modalId, modalProps);
    }
  };

  const handleClickNotif = (notification) => {
    if (!notification?.viewed) {
      put(
        {
          endpoint: NOTIFICATION_ENDPOINT.PUT.markAsRead(
            notification?.notification_id,
          ),
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([`notifications${origin}`]);
            queryClient.invalidateQueries([
              "notificationGetUnreadCount",
            ]);
          },
        },
      );
    }
    urlLookup(
      notification?.notification_topic_code,
      notification?.send_from,
      notification?.data,
    );
  };

  const handleChangeRead = (view) => {
    const filteredCheck = Object.keys(form.values.checkbox)?.filter(
      (key) => {
        return form.values.checkbox[key] === true;
      },
    );
    const ids = [];
    filteredCheck?.forEach((v) => {
      ids.push(v?.replace("notif_", ""));
    });
    put(
      {
        endpoint: NOTIFICATION_ENDPOINT.PUT.putReads,
        data: {
          view,
          notification_ids: form?.values?.checkAll ? [] : ids,
          origin: origin === "all" ? null : origin,
          module,
          read:
            form?.values?.status === "read"
              ? 1
              : form.values?.status === "unread"
              ? 0
              : null,
        },
      },
      {
        onSuccess: () => {
          form.setFieldValue("checkbox", {});
          form.setFieldValue("checkAll", false);
          queryClient.invalidateQueries([`notifications${origin}`]);
          queryClient.invalidateQueries([
            "notificationGetUnreadCount",
          ]);
        },
      },
    );
  };

  const handleClickActionState = (notification, isAccept) => {
    put(
      {
        endpoint: NOTIFICATION_ENDPOINT.PUT.aceptableActionNotif(
          notification?.notification_id,
        ),
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([`notifications${origin}`]);
          if (isAccept) {
            window.location.href = `${
              import.meta.env.VITE_LMS_URL
            }/explore/${notification?.data}/checkout`;
          }
        },
      },
    );
  };

  function MenuItem({ notification }) {
    const [isHover, setIsHover] = useState(false);
    const [isDetailed, setIsDetailed] = useState(false);
    const [isAction, setIsAction] = useState(
      notification?.is_have_action,
    );
    return (
      <div
        className={`${
          notification?.is_pinned ? "border-l-2 border-primary3 " : ""
        } `}
      >
        <div className="border-b">
          <div
            key={notification?.notification_id}
            className={` py-2 px-2  ${isDetailed ? "bg-bg2" : ""}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className="flex flex-row items-start w-full gap-4 cursor-pointer">
              <Checkbox
                size="xs"
                onChange={(e) => {
                  form.setFieldValue(
                    `checkbox.notif_${notification?.notification_id}`,
                    e.target.checked,
                  );
                }}
                checked={
                  form.values.checkbox?.[
                    `notif_${notification?.notification_id}`
                  ]
                }
              />
              <div className={`flex flex-col gap-[2px] w-full `}>
                <div className="flex-row flex justify-between items-center w-full">
                  <span
                    className={`font-bold text-sm text-primary3  ${
                      !isPage ? "line-clamp-1" : ""
                    } `}
                    onClick={() => handleClickNotif(notification)}
                  >
                    {notification?.title}
                  </span>
                  <div className="flex flex-row gap-1 ">
                    {isHover && !notification?.is_global && (
                      <>
                        <button
                          type="button"
                          className="p-0 font-normal hover:text-primary3 text-darkGrey"
                          onClick={() => {
                            if (!notification?.viewed) {
                              put(
                                {
                                  endpoint:
                                    NOTIFICATION_ENDPOINT.PUT.markAsRead(
                                      notification?.notification_id,
                                    ),
                                },
                                {
                                  onSuccess: () => {
                                    queryClient.invalidateQueries([
                                      `notifications${origin}`,
                                    ]);
                                  },
                                },
                              );
                            }
                          }}
                        >
                          <Icon
                            icon={
                              notification?.viewed
                                ? "mdi-light:email-open"
                                : "mdi-light:email"
                            }
                            width={20}
                          />
                        </button>
                        <button
                          type="button"
                          className="hover:text-danger3 p-0 font-normal text-darkGrey"
                          onClick={() => {
                            if (!notification?.is_global) {
                              deleteMutate(
                                {
                                  endpoint:
                                    NOTIFICATION_ENDPOINT.DELETE.deleteNotification(
                                      notification?.notification_id,
                                    ),
                                },
                                {
                                  onSuccess: () => {
                                    queryClient.invalidateQueries([
                                      `notifications${origin}`,
                                    ]);
                                  },
                                },
                              );
                            }
                          }}
                        >
                          <Icon icon="ph:trash" width={20} />
                        </button>
                        <button
                          type="button"
                          className={`p-0 font-normal hover:text-primary3  ${
                            notification?.is_pinned
                              ? "text-primary3"
                              : "text-darkGrey"
                          }`}
                          onClick={() => {
                            put(
                              {
                                endpoint:
                                  NOTIFICATION_ENDPOINT.PUT.pinnedNotif(
                                    notification?.notification_id,
                                  ),
                                data: {
                                  pinned: notification?.is_pinned
                                    ? 0
                                    : 1,
                                },
                              },
                              {
                                onSuccess: () => {
                                  queryClient.invalidateQueries([
                                    `notifications${origin}`,
                                  ]);
                                },
                              },
                            );
                          }}
                        >
                          <Icon
                            icon={
                              notification?.is_pinned
                                ? "tabler:pin-filled"
                                : "tabler:pin"
                            }
                            width={20}
                          />
                        </button>
                      </>
                    )}
                    {notification?.is_have_detail ? (
                      <button
                        type="button"
                        className="p-0 font-normal hover:text-primary3  text-darkGrey"
                        onClick={() => {
                          setIsDetailed((prev) => !prev);
                        }}
                      >
                        <Icon
                          icon={
                            isDetailed
                              ? "charm:chevron-up"
                              : "charm:chevron-down"
                          }
                          size="20"
                        />
                      </button>
                    ) : null}
                    {!notification?.viewed && (
                      <span className="text-primary3 text-2xl">
                        &bull;
                      </span>
                    )}
                  </div>
                </div>
                <div onClick={() => handleClickNotif(notification)}>
                  <span
                    className={`text-text1 text-sm w-full ${
                      !isPage ? "line-clamp-2" : ""
                    }`}
                  >
                    {notification?.message &&
                      parse(notification?.message)}
                  </span>
                  <div className="flex gap-1 items-center text-darkGrey text-xs">
                    <div className="mt-1">
                      <Icon
                        icon="streamline:interface-time-clock-circle-clock-loading-measure-time-circle"
                        width={12}
                      />
                    </div>
                    <span className="pt-1">
                      {dayjs(notification?.reminder_at)?.format(
                        "DD MMMM YYYY, H:mm",
                      )}
                    </span>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          {isDetailed && (
            <DetailNotification
              isDetailed={isDetailed}
              notification={notification}
              setIsDetailed={setIsDetailed}
            />
          )}
          {isAction && (
            <DetailNotification
              isAction
              notification={notification}
              setIsAction={setIsAction}
              handleClickActionState={handleClickActionState}
            />
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-between">
      <div className="border-b-[1px] w-full ">
        <ChipCarousel
          data={dataModules || []}
          value={module}
          onClick={(v) => {
            setModule(v);
          }}
        />
      </div>
      <div className="flex flex-row justify-between p-2 border-b">
        <div className="flex flex-row items-center  gap-2">
          {notifications?.items?.length > 0 && (
            <>
              <div className="mt-2">
                <Checkbox
                  classNames={{ label: "text-xs" }}
                  size="xs"
                  label="Pilih Semua"
                  onChange={(e) => {
                    form.setFieldValue("checkAll", e.target.checked);
                    const data = {};
                    notifications?.items?.forEach((v) => {
                      if (
                        Object.keys(form.values.checkbox)?.filter(
                          (key) => {
                            return form.values.checkbox[key] === true;
                          },
                        )?.length === notifications?.items?.length
                      ) {
                        data[`notif_${v?.notification_id}`] = false;
                      } else {
                        data[`notif_${v?.notification_id}`] = true;
                      }
                    });
                    form.setFieldValue("checkbox", data);
                  }}
                  checked={
                    Object.keys(form.values.checkbox)?.filter(
                      (key) => {
                        return form.values.checkbox[key] === true;
                      },
                    )?.length === notifications?.items?.length
                  }
                />
              </div>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <div className="mt-2">
                    <Icon icon="charm:chevron-down" size="20" />
                  </div>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item onClick={() => handleChangeRead(1)}>
                    Tandai semua dibaca
                  </Menu.Item>
                  <Menu.Item onClick={() => handleChangeRead(0)}>
                    Tandai semua belum dibaca
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>{" "}
            </>
          )}
        </div>
        <div className="w-[9rem]">
          <Select
            data={listStatus}
            size="xs"
            placeholder="Status Notifikasi"
            value={form.values.status}
            onChange={(v) => {
              form.setFieldValue("status", v);
            }}
            {...getClearableProps(
              form.values.status,
              () => form.setFieldValue("status", null),
              "select",
            )}
          />
        </div>
      </div>
      <div
        className={` overflow-auto scroll-style-2 ${
          isPage ? "h-full" : "h-[250px]"
        }`}
        ref={ref}
      >
        {(() => {
          if (status === "loading") {
            return <Loader size="sm" className="mx-auto my-3.5" />;
          }

          if (!notifications?.items) return null;

          return notifications?.items?.map((v) => {
            return <MenuItem notification={v} />;
          });
        })()}

        {status !== "loading" && isFetchingNextPage ? (
          <Loader size="sm" className="mx-auto my-3.5" />
        ) : null}
      </div>
      {!isPage && (
        <div className="py-2 flex flex-row justify-center">
          <Button
            variant="white"
            className="disabled:bg-white"
            onClick={() => {
              window.location.href = `${
                import.meta.env.VITE_SSO_URL
              }/notifications`;
            }}
            type="button"
          >
            Lihat semua
          </Button>
        </div>
      )}
    </div>
  );
}

function DetailNotification({
  notification,
  isAction,
  setIsAction,
  isDetailed,
  handleClickActionState,
}) {
  const courseService = Networks(BASE_PROXY.course);

  const { data, isLoading } = courseService.query(
    COURSE_ENDPOINT.GET.getBastLog(notification?.data),
    ["getHistoryBast"],
    { enabled: !isAction && isDetailed },
    {},
  );

  return (
    <div className="px-[2.5rem] py-[1rem]">
      {isAction ? (
        <div className="flex gap-2">
          <Button
            variant="outline"
            color="red"
            size="xs"
            onClick={() =>
              handleClickActionState(notification, false)
            }
          >
            Tolak
          </Button>
          <Button
            size="xs"
            onClick={() => {
              handleClickActionState(notification, true);
            }}
          >
            Terima
          </Button>
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="w-[100%] flex justify-center mt-3 h-max">
              <Loader />
            </div>
          ) : (
            <>
              {data?.length ? (
                <div className="flex flex-col gap-1">
                  <span className="text-primary3 font-semibold text-sm">
                    Cost Center {data?.[0]?.cost_center_name}
                  </span>
                  {data?.map((v, i) => (
                    <div
                      key={v?.log_id}
                      className="flex gap-4 items-start justify-start"
                    >
                      <div className="p-0 ">
                        <input
                          type="radio"
                          className="border-2 accent-primary3"
                          checked={i === 0}
                          disabled={i !== 0}
                        />
                      </div>{" "}
                      <div className="flex flex-col">
                        <p
                          className={`text-sm ${
                            i !== 0 ? "text-darkGrey" : ""
                          }`}
                        >
                          {v?.action} oleh{" "}
                          <strong
                            className={i === 0 ? "text-primary3" : ""}
                          >
                            {v?.user}{" "}
                          </strong>
                          sebagai{" "}
                          <strong
                            className={i === 0 ? "text-primary3" : ""}
                          >
                            {v?.as}
                          </strong>{" "}
                          pada{" "}
                          <strong
                            className={i === 0 ? "text-primary3" : ""}
                          >
                            {dayjs(v?.on)
                              .format(`DD - YYYY HH.mm`)
                              ?.replace(
                                "-",
                                LIST_OF_MONTH_INDONESIA[
                                  +dayjs(data?.start_date).format(
                                    "M",
                                  ) - 1
                                ],
                              )}
                          </strong>
                        </p>
                        <div className="flex gap-1 items-center text-darkGrey text-xs">
                          <div className="mt-1">
                            <Icon
                              icon="streamline:interface-time-clock-circle-clock-loading-measure-time-circle"
                              width={12}
                            />
                          </div>
                          <span className="pt-1">
                            {dayjs(data?.reminder_at)?.format(
                              "DD MMMM YYYY, H:mm",
                            )}
                          </span>
                        </div>{" "}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <i className="text-sm text-center">
                  Tidak ada history BAST
                </i>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default NotificationSection;
