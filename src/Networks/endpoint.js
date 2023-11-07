export const BASE_PROXY = {
  course: "/api/course/v1",
  cms: "/api/cms/v1",
  repository: "/api/repository/v1",
  groups: "/api/groups/v1",
  hq: "/api/hq/v1",
  positions: "/api/positions/v1",
  gamification: "/api/gamification/v1",
  kmap: "/api/kmap/v1",
  auth: "/api/auth/v1",
  employees: "/api/employees/v1",
  social: "/api/social/v1",
  notifications: "/api/notifications/v1",
  signature: "/api/signature/v1",
  searchEngine: "/api/search-engine/v1",
  dailyQuiz: "/api/daily-quiz/v1",
};

export const BASE_EXTERNAL_PROXY = {
  mytravel: "/api/mytravel/v1",
};

export const NOTIFICATION_ENDPOINT = {
  GET: {
    notifications: "/notification",
    unreadCount: "/notification/other/unread",
    notificationModules: "/notification/other/modules",
  },
  PUT: {
    markAsRead: (notificationId) =>
      `/notification/${notificationId}/read-mark`,
    allMarkAsRead: "/notification/other/all-read-mark",
    putReads: "/notification/other/reads",
    pinnedNotif: (notificationId) =>
      `/notification/${notificationId}/pin`,
    aceptableActionNotif: (notificationId) =>
      `/notification/${notificationId}/acceptance-status`,
  },
  DELETE: {
    deleteNotification: (notificationId) =>
      `/notification/${notificationId}`,
  },
};

export const GAMIFICATION_ENDPOINT = {
  GET: {
    leaderboard: "/karma-vw",
    employeeKarma: "/karma",
  },
};

export const MYTRAVEL_ENDPOINT = {
  GET: {
    reasons: "/api/Sppd/getKegiatan",
    sppdTypes: "/api/Sppd/getSppdType",
    cities: "api/Sppd/getCityByCostcenter",
    rapidTypes: "api/Sppd/getRapidType",
    modaTransports: "api/Sppd/getTransport",
    travelAgents: "api/Sppd/getAgent",
  },
};

export const COURSE_ENDPOINT = {
  GET: {
    allCourse: "/course/all-course",
    popularCourse: "/course/all-course-popular",
    courseBySearch: "/course/search-courses",
    myCourse: (employeeId) =>
      `/course/employee/${employeeId}/profile`,
    historyTransaction: (employeeId) =>
      `/course/history-transaction/${employeeId}`,
    totalEmployeeLearningHours: (employeeId) =>
      `/course/total-learning-hours/${employeeId}`,
    myCourseById: (courseId) => `/course/course-detail/${courseId}`,
    myCourseByIdContinue: (courseId) =>
      `/course/course-detail/${courseId}/outline`,
    myCourseByChapterId: (chapterId) =>
      `/course/chapter-detail/${chapterId}`,
    chapterVideoProgress: (courseId) =>
      `/course/${courseId}/chapter-detail/progress`,
    hqAllCourse: "/course-hq/all-course-hq",
    hqAllUser: "/course-hq/all-user-hq",
    myCourseProgress: (employeeId) =>
      `/course/employee/${employeeId}/progress-course`,
    myCoursePending: (employeeId) =>
      `/course/employee/${employeeId}/pending-course`,
    myCourseEnrollment: "/course/course_enrollment_approval",
    myWalletApproval: "/course/group_wallet_approval",
    myWalletTotal: "/wallet/total",
    sppd: "/sppd",
    sppdDetail: (sppdId) => `/sppd/${sppdId}/detail`,
    sppdCourseETicket: (sppdId) => `/sppd/${sppdId}/e-ticket`,
    sppdEmployeesCostCenter: "/sppd/employees-cost-center",
    sppdEmployeesApprover: "/sppd/employees-approver",
    sppdList: (courseClassId) => `/sppd/class/${courseClassId}/list`,
    employeesCreatedSppd: (courseClassId) =>
      `/sppd/${courseClassId}/participants/created`,
    employeesUncreatedSppd: (courseClassId) =>
      `/sppd/${courseClassId}/participants/uncreated`,
    hqCourseDetail: (courseId) =>
      `/course-hq/detail-course-hq/${courseId}`,
    courseDetail: (courseId) => `/course/course-detail/${courseId}`,
    competencies: "/course/list-competency",
    competenciesImportTemplate: "/course/competency/import/template",
    competencyProficiency: "/course/competency-proficiency",
    competencyClassificationCount:
      "/course/competency-classification-count",
    competenciesClassificationImportTemplate:
      "/course/competency-group/import/template",
    tags: "/course/list-tag",
    reviews: (courseId) => `/course/course-rate/${courseId}`,
    overallReviews: (courseId) =>
      `/course/overall-rating/${courseId}`,
    courseBasedOnType: "/course/classes",
    topLearners: "/course/top-learner",
    myLearningHoursRank: "/course/rank-learning-hours",
    subcons: "/course/subcon",
    trainers: "/course/trainer-all",
    trainersSubcon: (subconId) => `/course/trainer/${subconId}`,
    requester: "/course/course-request",
    requesterByCourse: (courseReqId) =>
      `/course/course-request/${courseReqId}`,
    jobFamilies: "/course/list-jobfam",
    adminCoursePool: "/admin/courses",
    countPoolCourse: "/course/countPoolCourse",
    adminProposedCourses: "/admin/courses/submission",
    adminCourseOverview: (courseId) =>
      `admin/courses/${courseId}/overview`,
    adminCourseDetail: (courseId) =>
      `admin/courses/${courseId}/detail`,
    pic: "/course/pic",
    adminCourseChapter: (courseId) =>
      `admin/courses/${courseId}/chapters`,
    adminCourseChapterAnalytics: (courseId) =>
      `admin/courses/${courseId}/chapter-analytics`,
    adminCourseStatusPeriod: (courseId) =>
      `/admin/analytics/course-status-period/${courseId}`,
    certificateTemplates: "/certificate",
    generateCertificateById: (certificateId) =>
      `/certificate/${certificateId}/download`,
    competencyGroup: `course/competency-group`,
    subconList: "/course/subcon",
    subconDetail: (subconId) => `/course/subcon-detail/${subconId}`,
    subconMembers: (subconId) => `/course/subcon-member/${subconId}`,
    subconGallery: (subconId) => `/course/subcon-gallery/${subconId}`,
    subconRating: (subconId) => `/rate/subcon/${subconId}`,
    subconGalleryDetail: (subconGalleryId) =>
      `/course/subcon-gallery-detail/${subconGalleryId}`,
    subordinateProgress: (employeeNumber) =>
      `/course/employee/${employeeNumber}/progress-subordinate`,
    subconTags: (subconId) => `/course/subcon-tag/${subconId}`,
    subconCourses: (subconId) => `/course/subcon-course/${subconId}`,
    vendorList: "/course/vendor",
    vendorDetail: (vendorId) => `/course/vendor-detail/${vendorId}`,
    vendorMembers: (vendorId) => `/course/vendor-member/${vendorId}`,
    vendorRating: (vendorId) => `/rate/vendor/${vendorId}`,
    vendorCorpuRating: (vendorId) =>
      `/course/vendor/rate/${vendorId}`,
    classByCourseId: (courseId) => `/course/${courseId}/class`,
    classListByCourseId: (courseId) =>
      `/course/${courseId}/class-list`,
    classListDetailByCourseId: (courseId) =>
      `/course/${courseId}/class`,
    classListBASTByCourseId: (courseId) =>
      `/course/vendor/bast/course/${courseId}/stats`,
    classOpenRegistration: `/course/class/other/open-registration`,
    trainersCourse: (courseId) =>
      `/course/course-trainer/${courseId}`,
    trainersCourseForCreateClass: (courseId) =>
      `/course/course-trainer/${courseId}`,
    picsCourse: (courseId) => `/course/course-pic/${courseId}`,
    adminCourseInformationAdditional: (courseId) =>
      `/admin/courses/${courseId}/information/additional`,
    adminCourseInformationOverview: (courseId) =>
      `/admin/courses/${courseId}/information/overview`,
    adminCourseInformationAttribute: (courseId) =>
      `/admin/courses/${courseId}/information/attribute`,
    adminCourseInformationTargetParticipant: (courseId) =>
      `/admin/courses/${courseId}/information/target-participant`,
    adminCourseInformationDetail: (courseId) =>
      `/admin/courses/${courseId}/information/detail`,
    courseQuizChapter: (chapterId) =>
      `/course/chapter/${chapterId}/quiz`,
    courseQuizEmployeeAnswer: (chapterId) =>
      `/course/chapter/${chapterId}/quiz/employee-answers`,
    courseQuizEmployeeAnswerByTry: (chapterId, tryNumber) =>
      `/course/chapter/${chapterId}/quiz/employee-answers/${tryNumber}`,
    courseProcurementDistributionPayment: (courseId) =>
      `/admin/courses/${courseId}/procurement/distribution-payment`,
    courseProcurementPaymentList: (courseId) =>
      `/admin/courses/${courseId}/procurement/payment-list`,
    coursePostTest: (courseId) => `/course/post-test/${courseId}`,
    coursePreTest: (courseId) => `/course/pre-test/${courseId}`,
    evaluationLevel1Question: (courseId) =>
      `/course/evaluation-lvl-1/${courseId}`,
    adminCourseReview: (courseId) =>
      `/admin/courses/${courseId}/review`,
    adminCourseCompletionRate: (courseId) =>
      `/admin/courses/${courseId}/participant/completion-rate`,
    adminCourseListParticipant: (courseId) =>
      `/admin/courses/${courseId}/participant/list`,
    adminCourseListAttendance: (courseId) =>
      `/admin/courses/${courseId}/participant/attendance`,
    adminCourseTimeCompleting: (courseId) =>
      `/admin/courses/${courseId}/participant/time-completion`,
    adminCourseDistribution: (courseId) =>
      `/admin/courses/${courseId}/participant/distribution`,
    adminCourseInformationAdministration: (courseId) =>
      `/admin/courses/${courseId}/information/administration`,
    adminCourseStatusProgressProcurement: (courseId) =>
      `/admin/courses/${courseId}/procurement/status-progress`,
    walletGroup: `/wallet/groups`,
    walletGroupDetail: (id) => `/wallet/groups/${id}`,
    walletGroupDetailadmin: (id) => `/wallet/groups/${id}/admin`,
    walletHistory: `/wallet/history`,
    walletEmployee: `/wallet/employees`,
    subconDashboardIL: (subconId) =>
      `/course/subcon-dashboard/${subconId}/individual`,
    subconCoursesStatus: "/course/subcon-course-status",
    vendorCoursesStatus: "/course/vendor-course-status",
    courseClasses: (courseId) =>
      `/course/course-detail/${courseId}/classes`,
    evalLevel: (courseId) =>
      `/course/course-detail/${courseId}/eval-lvl`,
    adminCourseAnalyticEvaluation: (courseId, level) =>
      `/admin/courses/${courseId}/evaluation/${level}/analytic`,
    questionTest: (courseId, employeeId) =>
      `/course/${courseId}/employee/${employeeId}/course-test/questions`,
    questionTestAdmin: (courseId) =>
      `/admin/${courseId}/course-test/questions`,
    adminMonthlyPublication: (type) =>
      `admin/analytics/monthly-publication-by-type/${type}`,
    adminMonthlyPublicationStatus: "/admin/analytics/course-status",
    adminPublishedCoursesIL:
      "/admin/analytics/list-all-published-course-individual",
    adminPublishedCoursesGL:
      "/admin/analytics/list-all-published-course-group",
    adminAllParticipant:
      "/admin/analytics/list-all-course-participant",
    adminEntityCounts: "/admin/analytics/count-course",
    adminCourseStatusCounts: "/admin/analytics/count-status-course",
    adminClassCounts: "/admin/analytics/count-class",
    adminSpecificCourseCounts:
      "/admin/analytics/count-course-spesific",
    personalAreas: "/course/list-personal-area",
    subPersonalAreas: "/course/list-sub-personal-area",
    adminAnalyticsWalletType:
      "/admin/analytics/transaction-distribution-by-wallet-type",
    adminAnalyticsPurchasesVendor:
      "/admin/analytics/course-purchases-distribution-by-vendor?",
    adminAnalyticsPurchasesSubcon:
      "/admin/analytics/course-purchases-distribution-by-subcon",
    adminAnalyticsListAllCourseRating:
      "/admin/analytics/list-all-course-rating",
    adminAnalyticsListAllCourseEvaluationLevel1:
      "/admin/analytics/list-all-course-evaluation-level-1",
    adminAnalyticsCourseTransaction:
      "/admin/analytics/course-transaction",
    adminAnalyticsCourseClass: "/admin/analytics/course-class",
    adminListWalletName: "/course/list-wallet-name",
    adminListWalletOwner: "/course/list-wallet-owner-name",
    adminAnalyticsTrxStatus:
      "/admin/analytics/transaction-distribution-status",
    adminAnalyticsDetailUser: (employeeNumber) =>
      `/admin/analytics/detail-user/${employeeNumber}`,
    adminAnalyticsDetailCourse: (employeeId) =>
      `/admin/analytics/detail-course/${employeeId}`,
    adminEvaluationLevel1PerQuestionCategory: (courseId) =>
      `/admin/analytics/${courseId}/evaluation-level-1-per-question-category`,
    adminCourseParticipantProgress: (courseId) =>
      `/admin/courses/${courseId}/employee-progress`,
    subconManagementVendor: (vendorId) =>
      `/course/vendor-subcon-management/${vendorId}`,
    countAnalyticVendor: (vendorId) =>
      `/course/count-course/${vendorId}`,
    coursePublicationVendorPeriode: (vendorId, type) =>
      `/course/course-publication-by-subcon-and-time-period/${vendorId}/${type}`,
    subconByVendor: (vendorId) =>
      `/course/list-subcon-from-vendor/${vendorId}`,
    vendorAnalyticCourse: (vendorId) =>
      `/course/vendor-counting/${vendorId}`,
    subconDashboardGL: (subconId) =>
      `/course/subcon-dashboard/${subconId}/group`,
    subconProposedCourses: (subconId) =>
      `/course/subcon/course-proposed/${subconId}`,
    subconJobFamily: (subconId) =>
      `/course/subcon-jobfam/${subconId}`,
    subconAnalyticsIncomeByStatus: (subconId) =>
      `/course/subcon-income-by-status/${subconId}`,
    subconAnalyticsIncomeByPeriod: (subconId) =>
      `/course/subcon-income-by-time-period/${subconId}`,
    subconAnalyticsIncomeByWallet: (subconId) =>
      `/course/subcon-income-by-wallet-type/${subconId}`,
    subconAnalyticsIncomeByCourseType: (subconId) =>
      `/course/subcon-income-by-course-type/${subconId}`,
    subconAnalyticsIncomeByCourseMethod: (subconId) =>
      `/course/subcon-income-by-course-method/${subconId}`,
    subconAnalyticsIncomeByTargetLevel: (subconId) =>
      `/course/subcon-income-by-target-level/${subconId}`,
    subconAnalyticsIncomeByBestCourse: (subconId) =>
      `/course/subcon-income-by-best-course/${subconId}`,
    trainerDetail: (trainerId) =>
      `/course/trainer-detail/${trainerId}`,
    subconCourseCount: "/course/total-course-subcon",
    vendorCourseCount: "/course/vendor/total-course-vendor",
    chapterForum: (chapterId) =>
      `/course/get-forum-chapter/${chapterId}`,
    subconActivities: "/course/subcon-course-status",
    vendorCourseIL: (vendorId) => `/course/course-vendor/${vendorId}`,
    vendorCourseGL: (vendorId) =>
      `/course/course-vendor/${vendorId}/gl`,
    vendorCalendar: (vendorId) =>
      `/course/vendor/${vendorId}/vendor-calender`,
    picDetail: (picId) => `/course/pic-detail/${picId}`,
    vendorRequestCourse: "/course/vendor/request-course",
    vendorRequestCourseDetail: (courseReqId) =>
      `/course/vendor/request-course/${courseReqId}`,
    vendorGallery: (vendorId) =>
      `/course/vendor/vendor-gallery/${vendorId}`,
    vendorJobFamily: (vendorId) =>
      `/course/vendor/vendor-jobfam/${vendorId}`,
    vendorTags: (vendorId) => `/course/vendor/vendor-tag/${vendorId}`,
    vendorGalleryDetail: (galleryId) =>
      `/course/vendor/vendor-gallery-detail/${galleryId}`,
    adminCourseVendorBastInformation: (vendorId) =>
      `/course/vendor/bast-information/gl/${vendorId}`,
    adminCouseSectionBastMyTeam: (userId) =>
      `/course/vendor/bast-information/gl/user/${userId}`,
    adminCourseVendorBastInformationDashboard:
      "/course/vendor/bast-information/gl",
    classCostCenterBASTList: (classId) =>
      `/course/vendor/bast/course/class/${classId}`,
    courseCostCenterBASTList: (courseId) =>
      `/course/vendor/bast/course/${courseId}`,
    courseCount: (courseId) =>
      `/admin/courses/${courseId}/count-data`,
    courseAbsent: (classId) =>
      `/admin/courses/class/${classId}/absent`,
    adminQuizReviews: (courseId) =>
      `/course/${courseId}/quiz/participant-review`,
    employeeLearningActivity: (employeeId) =>
      `/course/employee/${employeeId}/learning-activity`,
    employeeLearningActivityPerWeek: (employeeId) =>
      `/course/chapter/learning-hour-log/${employeeId}`,
    getCourseCalendar: "/course/calendar",
    getSafmWerks: "/safm/werks",
    getSafmBtrtl: "/safm/btrtl",
    notificationCalendar: "/course/calendar/notification",
    competencyProgress: (employeeId) =>
      `/course/employee/${employeeId}/classification-competency-progress`,
    allEmployeeSAFM: "/safm/employees",
    portoCourseDetail: (portoCourseId) =>
      `/course/subcon/portofolio/${portoCourseId}`,
    evaluationModal: (courseId, employeeId) =>
      `/course/evaluation/${courseId}/modal/${employeeId}`,
    bastDetail: (bastId) => `/course/vendor/bast/${bastId}`,
    userBASTRole: (bastId) => `/course/vendor/role/${bastId}`,
    courseEval1Rating: (courseId) => `/course/${courseId}/eval-lvl1`,
    bastRevisionDetail: (bastId) =>
      `/course/vendor/bast/revision/${bastId}`,
    externalCourseEmployeesAttendance: (courseClassId) =>
      `/course/external/class/${courseClassId}/chapters/employees`,
    externalCourseEmployeesAttendanceChapters: (courseClassId) =>
      `/course/external/class/${courseClassId}/chapters`,
    externalCourseEmployeesGraduations: (courseClassId) =>
      `/course/external/class/${courseClassId}/graduations/employees`,
    getBastLog: (bastId) => `/course/vendor/bast/${bastId}/log`,
    draftBAST: (bastId) => `/course/vendor/draft-bast/${bastId}`,
    externalCourseEmployeesPrePostTest: (courseClassId) =>
      `/course/external/class/${courseClassId}/prepost-tests/employees`,
    externalCourseEmployeesLearningHours: (courseClassId) =>
      `/course/external/class/${courseClassId}/learning-hours/employees`,
    externalCourseEmployeesCertificates: (courseClassId) =>
      `/course/external/class/${courseClassId}/certificates/employees`,
    baseBASTFile: (bastId) => `/course/vendor/baseBastFile/${bastId}`,
    certificateEmployees: (employeeId) =>
      `/certificate/employee/${employeeId}`,
    detailCourseRequest: (courseRequestId) =>
      `/course/request/${courseRequestId}`,
    listFollowerCourseRequest: (courseRequestId) =>
      `/course/list-course-followers/${courseRequestId}`,
    externalCourseClaims: "/course/ext-course",
    externalCourseClaimsAdmin: "/course/dashboard/claim",
    courseClaimDetail: (claimId) =>
      `/course/dashboard/claim/${claimId}`,
    bastCoursePrice: "/course/vendor/bast-information/price",
    courseEvaluationTable: (courseId, employeeId) =>
      `/course/evaluation/${courseId}/employee/${employeeId}`,
    courseStatusCount: (coursiId) =>
      `/admin/courses/${coursiId}/paticipant-information/course-status-count`,
    workUnitCourse: (courseId) =>
      `/admin/courses/${courseId}/paticipant-information/work-unit-filter`,
    listParticipantCourse: (courseId) =>
      `/admin/courses/${courseId}/paticipant-information`,
    participantProgressCourse: (courseId) =>
      `/admin/courses/${courseId}/paticipant-information/progress-detail`,
    adminCoursesFinalReport: "/admin/courses/final-result-report",
    listTestimonial: "/course/testimonial",
    countAnalyticUser: "/admin/analytics/count-user",
    listCoursePeriode: "/admin/analytics/course-period",
    detailCoursePeriode: (courseId) =>
      `/admin/analytics/course-period/${courseId}`,
    analyticsCourseDetail: (courseId) =>
      `/admin/analytics/course-detail/${courseId}`,
    analyticsClassDetail: (classId) =>
      `/admin/analytics/class-detail/${classId}`,
    analyticsCourseParticipants: (courseId) =>
      `/admin/analytics/course-detail-participant/${courseId}`,
    analyticsClassParticipants: (classId) =>
      `/admin/analytics/class-detail-participant/${classId}`,
    analyticsCourseList: "/admin/analytics/course-learning",
    analyticsTraineeCourseDetail:
      "/admin/analytics/course-detail-data",
    courseDashboardSetting: "/course-dashboard-setting",
    trainerCount: "/course/count-trainer",
    trainerList: "/course/trainer-data",
    trainerStatisticDetail: (trainerId) =>
      `/course/trainer-detail-data/${trainerId}`,
  },
  POST: {
    createWallet: `/wallet`,
    createCertificate: `/certificate`,
    createSppd: `/sppd`,
    sendToTravel: (sppdId) => `/sppd/${sppdId}/travels`,
    createSppdCourseClass: (courseClassId) =>
      `/sppd/${courseClassId}/participants`,
    createGallery: (subconId) =>
      `/course/add-subcon-gallery/${subconId}`,
    createTrainer: (subconId) =>
      `/course/subcon/add-trainer/${subconId}`,
    createMemberVendor: (vendorId) =>
      `/course/vendor/add-member/${vendorId}`,
    buyCourse: (courseId) =>
      `/course/course-detail/${courseId}/buy-course`,
    reviews: (courseId) => `/course/course-rate/${courseId}`,
    createCourse: `/course`,
    createCourseSubcon: (subconId) =>
      `/course/subcon/create-subcon-portofolio/${subconId}`,
    addCompetency: `/course/add-competency`,
    importCompetency: `/course/competency/import`,
    importCompetencyClassification: "/course/competency-group/import",
    addBulkCompetency: `/course/add-bulk-competency`,
    addCompetencyGroup: `/course/competency-group`,
    createChapter: (courseId) => `/course/${courseId}/chapter`,
    overallReviews: (courseId) =>
      `/course/overall-rating/${courseId}`,
    createClass: (courseId) => `/course/${courseId}/class`,
    createSubcon: "/course/add-subcon",
    createVendor: "/course/vendor/add-vendor",
    subconTags: (subconId) => `/course/add-subcon-bidang/${subconId}`,
    subconJobFams: (subconId) =>
      `/course/add-subcon-jobfam/${subconId}`,
    reviewConfirmationNotes: (courseId) =>
      `/admin/courses/${courseId}/review`,
    createRating: (courseId) => `/course/add-rating/${courseId}`,
    finishQuiz: (chapterId) =>
      `/course/chapter/${chapterId}/quiz/finish-quiz`,
    submitEvaluationLevel1: (courseId) =>
      `/course/evaluation-lvl-1/${courseId}`,
    submitCourseTest: "/course/course-test/answer",
    jobFamily: "/course/add-jobfam",
    tag: "/course/list-tag",
    createPrePostTest: (courseId) =>
      `/course/${courseId}/course-test`,
    reviewGradeTest: (employeeId) =>
      `/course/course-test/employee/${employeeId}/review`,
    chapterComment: (chapterId) => `/course/add-comment/${chapterId}`,
    vendorTags: (vendorId) =>
      `/course/vendor/add-vendor-bidang/${vendorId}`,
    vendorJobFams: (vendorId) =>
      `/course/vendor/add-vendor-jobfam/${vendorId}`,
    createGalleryVendor: (vendorId) =>
      `/course/vendor/add-vendor-gallery/${vendorId}`,
    createSubconRate: (subconId) =>
      `/course/subcon/evaluation/${subconId}`,
    createVendorRate: (vendorId) =>
      `/course/vendor/evaluation/${vendorId}`,
    createBAST: "/course/vendor/bast",
    createBASTByUpload: "/course/vendor/bast/upload",
    createBASTByUploadV2: "/course/vendor/bast/upload-direct",
    createExtCourseClaim: "/course/claim",
    createTestimonial: "/course/course-testimonial",
    sendNotificationByEmployeeId: (courseId, employeeId) =>
      `/admin/courses/${courseId}/course-reminder?employee_id=${employeeId}`,
  },
  PUT: {
    finishCourse: (courseId) =>
      `/course/course-completed/${courseId}`,
    updateTraineeFinalScore: (chapterId) =>
      `/course/chapter-detail/${chapterId}/final-score`,
    actionCourseRequestDraftStatus: (courseId) =>
      `admin/courses/${courseId}/request/status`,
    readyPublishCourse: (courseId) =>
      `/admin/courses/${courseId}/request/status/ready-publish`,
    publishCourse: (courseId) =>
      `admin/courses/${courseId}/request/status/publish`,
    reorderChapter: (courseId) =>
      `/course/${courseId}/update-chapter-order`,
    reviewNotes: (courseId) => `/admin/courses/${courseId}/review`,
    employeeQuizAnswer: (chapterId, quizId) =>
      `/course/chapter/${chapterId}/quiz/${quizId}`,
    startQuiz: (chapterId) =>
      `/course/chapter/${chapterId}/quiz/start-quiz`,
    acceptReview: (courseId) =>
      `/admin/courses/${courseId}/review/accept`,
    rejectReview: (courseId) =>
      `/admin/courses/${courseId}/review/reject`,
    courseReview: (courseId) =>
      `/admin/courses/${courseId}/review/revision`,
    editSubconDescription: (subconId) =>
      `/course/subcon/edit-description/${subconId}`,
    subconSupportingDocument: (subconId) =>
      `/course/add-document/${subconId}`,
    updateWallet: (walletId) => `/wallet/${walletId}`,
    editVendorDescription: (vendorId) =>
      `/course/vendor-detail/${vendorId}`,
    updateVendorProfile: (vendorId) =>
      `/course/vendor/update-photo/${vendorId}`,
    updateVendorCover: (vendorId) =>
      `/course/vendor/update-banner/${vendorId}`,
    uploadVendorSupportingDocument: (vendorId) =>
      `/course/vendor/update-doc/${vendorId}`,
    updateSubconProfile: (subconId) =>
      `/course/edit-photo-subcon/${subconId}`,
    updateSubconCover: (subconId) =>
      `/course/edit-subcon-banner/${subconId}`,
    updateWalletStatus: (walletReqId) =>
      `/wallet/approval-wallet/${walletReqId}`,
    updateWalletEmployeeBalance: `/wallet/employee/balance`,
    updateCourseEnrollmentStatus: (courseReqId) =>
      `/course/course_enrollment_approval/${courseReqId}`,
    reviewQuiz: (chapterId, employeeId) =>
      `/course/chapter/${chapterId}/quiz/${employeeId}/review`,
    finalizeReviewQuiz: (chapterId, employeeId) =>
      `/course/chapter/${chapterId}/quiz/${employeeId}/review/finalize`,
    UpdateAbsent: (classId) =>
      `admin/courses/class/${classId}/absent`,
    markAsReadNotifCalendar:
      "/course/calendar/notification/mark-as-read",
    approveBAST: (bastId) => `/course/vendor/bast/approval/${bastId}`,
    reviseBAST: (bastId) => `/course/vendor/revision/bast/${bastId}`,
    createSignatureBAST: (bastId) =>
      `/course/vendor/bast/signature/${bastId}`,
    updateSubconPIC: (subconId) => `/course/subcon/pic/${subconId}`,
    uploadBastDocument: (bastId) =>
      `/course/vendor/bast/document/${bastId}`,
    updateEmployeeAttendanceExternalCourse: (courseClassId) =>
      `/course/external/class/${courseClassId}/chapters`,
    updateEmployeeGraduationExternalCourse: (courseClassId) =>
      `/course/external/class/${courseClassId}/graduations`,
    updateBAST: (bastId) => `/course/vendor/bast/${bastId}`,
    updateEmployeesPrePostTestExternalCourse: (courseClassId) =>
      `/course/external/class/${courseClassId}/prepost-tests`,
    updateEmployeesLearningHourExternalCourse: (courseClassId) =>
      `/course/external/class/${courseClassId}/learning-hours`,
    updateEmployeesCertificateExternalCourse: (courseClassId) =>
      `/course/external/class/${courseClassId}/certificates`,
    updateEmployeesCertificateDownloadAt: `/certificate/action/store/download-at`,
    updateExtCourseClaim: (claimId) =>
      `/course/dashboard/update/status/${claimId}`,
    updateActivatedTestimonial: (id, activ) =>
      `/course/update-testimonial/${id}?status=${activ}`,
    updateSppdCourseClass: (sppdId) => `sppd/${sppdId}`,
    archiveCourse: (courseId) =>
      `/admin/courses/archive-course/${courseId}`,
    updateCoursePeriodSetting: `/course-dashboard-setting`,
    approveBASTForUploadFlow: (bastId) =>
      `/course/vendor/bast/approver/approve/${bastId}`,
  },
  DELETE: {
    cancelCourseEnrollment: (courseId) =>
      `/course/course/${courseId}/enrollment`,
    sppdParticipants: (courseClassSppdId) =>
      `/sppd/${courseClassSppdId}/sppd-participants/created`,
    sppdCourseClassEmployee: (courseClassId, employeeId) =>
      `/sppd/course/class/${courseClassId}/employee/${employeeId}`,
    subconTags: (subconId) =>
      `/course/delete-subcon-bidang/${subconId}`,
    subconJobFams: (subconId) =>
      `/course/delete-subcon-jobfam/${subconId}`,
    certificate: (certificateId) => `/certificate/${certificateId}`,
    course: `/course`,
    vendorTags: (vendorId) =>
      `/course/vendor/delete-vendor-bidang/${vendorId}`,
    vendorJobFams: (vendorId) =>
      `/course/vendor/delete-vendor-jobfam/${vendorId}`,
    createGalleryVendor: (vendorId) =>
      `/course/vendor/delete-vendor-gallery/${vendorId}`,
    courseReq: (courseReqId) =>
      `/course/delete-request/${courseReqId}`,
    vendorMembers: (vendorId) => `/course/vendor/member/${vendorId}`,
    subconTrainers: (subconId) =>
      `/course/subcon/members/${subconId}`,
    testimonial: (testimonialId) =>
      `/course/delete-testimonial/${testimonialId}`,
  },
};

export const EXPLORE_ENDPOINT = {
  GET: {
    allReqCourse: "/course/course-request",
    myReqCourse: "/course/my-course-request",
  },
  POST: {
    joinReqCourse: (courseId) =>
      `/course/join-course-request/${courseId}`,
    addReqCourse: "/course/add-course-request",
    addWatchUser: (courseId) =>
      `/course/${courseId}/increment-course-view`,
  },
};

export const KMAP_ENDPOINT = {
  GET: {
    importantKnowledges: "/kmap/other/ik",
    criticalKnowledge: "/kmap/other/ik",
  },
};

export const SIGNATURE_ENDPOINT = {
  GET: {
    getSignatureEligibleEmployee: "/signature/eligible-employee",
    getIsAlreadyCreatedPin: "/signature/is-already-created-pin",
    getAllConfirmedSignatures: "/signature/all-confirmed",
    verificationPin: "/signature/pin/verify",
    getAllChanges: (signatureId) => `/changes/all/${signatureId}`,
    getSignatureById: (signatureId) =>
      `/signature/detail/${signatureId}`,
    getHasAccceptedInvitation: (signatureId) =>
      `/signature/has-accepted/${signatureId}`,
    checkSMSAuthorization: "/authorization/check",
    getSignatureImg: "/signature/employee",
    getSignatureLastInvitedTime: (signatureId) =>
      `/invite/last-invited/${signatureId}`,
    getSignatureToken: "/signature/security/generate-token",
    verifySignatureToken: (token) =>
      `/signature/security/token/${token}/verify-token`,
  },
  POST: {
    createSignature: (employeeId, pin) =>
      `/signature/create/${employeeId}${pin ? `?pin=${pin}` : ""}`,
    createPageVisitHistory: (signatureId) =>
      `/history/create/${signatureId}`,
  },
  DELETE: {
    deleteSignature: (signatureId) =>
      `/signature/delete/${signatureId}`,
    destroyToken: (token) =>
      `/signature/security/token/${token}/destroy-token`,
  },
  PUT: {
    reinviteUser: (signatureId) => `/invite/re/${signatureId}`,
    updateTokenAccessCount: (token) =>
      `/signature/security/token/${token}/update-access-count`,
  },
};

export const REPO_ENDPOINT = {
  POST: {
    uploadFile: "/file",
  },
};

export const GROUPS_ENDPOINT = {
  GET: {
    privilleges: "/privilege/other/user-status",
    allGroups: "/groups",
    allGroupsV2: "/v2/groups",
  },
};

export const POSITIONS_ENDPOINT = {
  GET: {
    allPositions: "/position",
    allPositionsV2: "/v2/position",
  },
};

export const HQ_ENDPOINT = {
  GET: {
    rolesSum: "/hq-user-manage/role-data",
  },
};

export const AUTH_ENDPOINT = {
  POST: {
    logout: "/auth/logout",
  },
};

export const EMPLOYEES_ENDPOINT = {
  GET: {
    allEmployees: "/employee",
    profileDetail: (employeeId) => `/employee/${employeeId}/profile`,
    employeeProfile: (employeeId) =>
      `/employee/${employeeId}/profile`,
    exportLogins: "/employee/activations/logins",
    exportArticleSME: "/employee/activations/articlesme",
    exportHashtags: "/employee/activations/hashtags",
    exportCourseParticipants: "employee/activations/informasipeserta",
    exportEval1Avg: "employee/activations/eval1avg",
    exportEval1Detail: "employee/activations/eval1detail",
    exportLearningHour: "employee/activations/learninghour",
  },
};
export const SOCIAL_ENDPOINT = {
  GET: {
    socialEmployees: `/social-employee/employee`,
  },
};

export const SEARCH_ENGINE_ENDPOINT = {
  GET: {
    spotlight: "/spotlight",
  },
};

export const DAILY_QUIZ_ENDPOINT = {
  GET: {
    searchQuestion: "/search/quiz",
    searchCollection: "/search/collection",
    collectionDetail: (collectionId) => `collection/${collectionId}`,
    collectionSummary: `/collection/summary`,
    getAllQuestions: "/quiz",
    questionDetail: (quizId) => `/quiz/${quizId}`,
    searchJobfam: `/search/jobfam`,
    searchJobFunction: `/search/jobfunction`,
    searchWorkUnit: "/search/group",
    quizByOriginAndId: (originType, originId) =>
      `/search/quiz/${originType}/${originId}`,
    downloadAnalytics: (start, end) =>
      `/analytics/download?1=1${start ? `&start=${start}` : ""}${
        end ? `&end=${end}` : ""
      }`,
    downloadAnalyticsCollectionId: (collectionId, start, end) =>
      `/analytics/download/collection/${collectionId}?1=1${
        start ? `&start=${start}` : ""
      }${end ? `&end=${end}` : ""}`,
    downloadAnalyticsQuizId: (quizIds, start, end) =>
      `/analytics/download/quiz?1=1${
        quizIds?.length ? `&quiz_ids=${quizIds.join(",")}` : ""
      }${start ? `&start=${start}` : ""}${end ? `&end=${end}` : ""}`,
    getAllCollection: "/collection",
    dailyQuizData: "/daily-quiz",
  },
  POST: {
    createCollection: "/collection",
    createQuestion: "/quiz",
    actionQuiz: `/daily-quiz`,
  },
  PUT: {
    updateStatus: (collectionId) =>
      `collection/${collectionId}/status`,
    editCollection: (collectionId) => `/collection/${collectionId}`,
    updateQuestion: (quizId) => `quiz/${quizId}`,
  },
  DELETE: {
    deleteCollection: (collectionId) => `/collection/${collectionId}`,
    deleteQuestion: (quizId) => `/quiz/${quizId}`,
  },
};
