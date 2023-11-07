import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

// TODO Reset Redux on Logout
/* eslint-disable no-param-reassign */
export const slice = createSlice({
  name: "store",
  initialState: {
    privilegesAndRole: {}, // privilegesAndRole by module
    isEditPoolCourseDetail: false,
    courseQuizStates: {},
    courseTestStates: {},
    hasTraineeSidebar: true,
    evaluationLevel1Answers: {},
    isTakingTest: {},
    unreadNotifications: {
      all: 0,
      kms: 0,
      lms: 0,
      tms: 0,
    },

    // start daily quiz
    quizStatus: {},
    // end daily quiz
  },

  reducers: {
    setPrivilegesAndRole: (state, action) => {
      state.privilegesAndRole = action.payload;
    },
    setIsEditPoolCourseDetail: (state, action) => {
      state.isEditPoolCourseDetail = action.payload;
    },
    setCourseQuizStates: (state, action) => {
      const {
        chapterId,
        started,
        finished,
        questionId,
        answer,
        note,
      } = action.payload;

      const withoutId = { ...action.payload };
      delete withoutId.chapterId;
      delete withoutId.questionId;

      if (
        typeof started === "boolean" ||
        typeof finished === "boolean"
      ) {
        state.courseQuizStates[chapterId] = {
          ...state.courseQuizStates[chapterId],
          ...withoutId,
        };
      }
      if (!!questionId && (!!answer || !!note)) {
        state.courseQuizStates[chapterId][questionId] = {
          answer:
            answer ||
            state.courseQuizStates[chapterId][questionId]?.answer,
          note:
            note ||
            state.courseQuizStates[chapterId][questionId]?.note,
        };
      }
      if (!!state.courseQuizStates[chapterId] && finished) {
        const keys = Object.keys(state.courseQuizStates[chapterId]);
        for (let i = 0; i < keys.length; i += 1) {
          if (keys[i] !== "started" && keys[i] !== "finished")
            delete state.courseQuizStates[chapterId][keys[i]];
        }
        state.courseQuizStates[chapterId] = withoutId;
      }
    },
    setCourseTestStates: (state, action) => {
      const {
        courseId,
        started,
        finished,
        questionId,
        answer,
        note,
      } = action.payload;

      const withoutId = { ...action.payload };
      delete withoutId.chapterId;
      delete withoutId.questionId;

      if (
        typeof started === "boolean" ||
        typeof finished === "boolean"
      ) {
        state.courseTestStates[courseId] = {
          ...state.courseTestStates[courseId],
          ...withoutId,
        };
      }
      if (!!questionId && (!!answer || !!note)) {
        state.courseTestStates[courseId][questionId] = {
          answer:
            answer ||
            state.courseTestStates[courseId][questionId]?.answer,
          note:
            note ||
            state.courseTestStates[courseId][questionId]?.note,
        };
      }
      if (!!state.courseTestStates[courseId] && finished) {
        const keys = Object.keys(state.courseTestStates[courseId]);
        for (let i = 0; i < keys.length; i += 1) {
          if (keys[i] !== "started" && keys[i] !== "finished")
            delete state.courseTestStates[courseId][keys[i]];
        }
        state.courseTestStates[courseId] = withoutId;
      }
    },
    setHasTraineeSidebar: (state, action) => {
      state.hasTraineeSidebar = action.payload;
    },
    setEvaluationLevel1Answers: (state, action) => {
      const { mode, id, checked, courseId } = action.payload;
      const newState = { ...state.evaluationLevel1Answers[courseId] };
      const index = (newState[mode] || []).findIndex(
        (ans) => ans.id === id,
      );
      if (index >= 0) {
        newState[mode][index] = {
          id,
          checked,
        };
      } else {
        newState[mode] = [...(newState[mode] || []), { id, checked }];
      }
      state.evaluationLevel1Answers[courseId] = { ...newState };
    },
    setIsTakingTest: (state, action) => {
      const { id, value } = action.payload;
      state.isTakingTest = {
        ...state.isTakingTest,
        [id]: value,
      };
    },
    setUnreadNotification: (state, action) => {
      const { all, kms, lms, tms } = action.payload;
      state.unreadNotifications = {
        all: all || all === 0 ? all : state.unreadNotifications.all,
        kms: kms || kms === 0 ? kms : state.unreadNotifications.kms,
        lms: lms || lms === 0 ? lms : state.unreadNotifications.lms,
        tms: tms || tms === 0 ? tms : state.unreadNotifications.tms,
      };
    },
    // start daily quiz
    setDailyQuizStatus: (state, action) => {
      const { date, isCompleted, employeeNumber } = action.payload;
      const temp = {};
      temp[
        `${employeeNumber}_${dayjs(new Date(date)).format(
          "DD-MM-YYYY",
        )}`
      ] = {
        isCompleted,
      };
      state.quizStatus = temp;
    },
    // end daily quiz
  },
});

export const {
  setPrivilegesAndRole,
  setIsEditPoolCourseDetail,
  setCourseQuizStates,
  setHasTraineeSidebar,
  setEvaluationLevel1Answers,
  setIsTakingTest,
  setCourseTestStates,
  setUnreadNotification,
  setDailyQuizStatus,
} = slice.actions;

export default slice.reducer;
