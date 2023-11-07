/* eslint-disable import/prefer-default-export */
export const GMT_TIMEZONE_LIST = [
  "GMT-12:00",
  "GMT-11:00",
  "GMT-10:00",
  "GMT-09:30",
  "GMT-09:00",
  "GMT-08:00",
  "GMT-07:00",
  "GMT-06:00",
  "GMT-05:00",
  "GMT-04:30",
  "GMT-04:00",
  "GMT-03:30",
  "GMT-03:00",
  "GMT-02:00",
  "GMT+00:00",
  "GMT+01:00",
  "GMT+02:00",
  "GMT+03:00",
  "GMT+03:07",
  "GMT+03:30",
  "GMT+04:00",
  "GMT+04:30",
  "GMT+05:30",
  "GMT+05:45",
  "GMT+06:00",
  "GMT+06:30",
  "GMT+07:00",
  "GMT+08:00",
  "GMT+08:45",
  "GMT+09:00",
  "GMT+10:00",
  "GMT+10:30",
  "GMT+11:00",
  "GMT+11:30",
  "GMT+12:00",
  "GMT+12:45",
  "GMT+13:00",
  "GMT+14:00",
];

export const color = {
  primary1: "#C9F3FB",
  primary2: "#93E2F7",
  primary3: "#016DB2",
  primary4: "#005499",
  primary5: "#003F80",
  primary6: "#4EAEEC",
  secondary1: "#1192E8",
  secondaryCyan: "#37B6E2",
  bg1: "#F2F4F6",
  bg2: "#F2F4F8",
  bg3: "#F6F6F6",
  bg4: "#FBFBFB",
  green: "#4BB543",
  green1: "#4BB543",
  success1: "#F4FBF4",
  success2: "#B8E3B5",
  success3: "#4BB543",
  warning1: "#FEF9F1",
  warning2: "#F9D79F",
  warning3: "#F5BB5C",
  danger1: "#FFF4F2",
  danger2: "#EEB4B0",
  danger3: "#CB3A31",
  grey: "#C1C7CD",
  grey2: "#C4C4C4",
  lightGrey: "#DDE1E6",
  darkGrey: "#878D96",
  text1: "#444444",
  red1: "#CB0000",
  red2: "#CB3A31",
  coffee: "#444444",
  baseGrey: "#325366",
  baseGradient: "#6CC7FE",
  topGradient: "#111111",
  iconGradient: "#FEFEFE",
  info1: "#F0F3FF",
  info2: "#B1C5F6",
  info3: "#3267E3",
  info4: "#193AA3",
};

export const MESSAGES_TEMPLATE = {
  successCopy: "Copied to clipboard",
  successDelete: "Success Delete",
};

export const VALIDATION_REGEX = {
  url: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const VALIDATE_FIELD = {
  required: (value) => {
    const message = "Field cannot be empty";
    if (typeof value === "string" && !value.trim()) {
      return message;
    }
    if (!value) {
      return message;
    }
    return null;
  },
  requiredScore: (value) => {
    const message = "Field cannot be empty";
    if (typeof value === "string" && !value.trim()) {
      return message;
    }

    if (!value && value !== 0) {
      return message;
    }
    return null;
  },
  email: (value) =>
    !VALIDATION_REGEX.email.test(value) ? "Invalid email" : null,
  url: (value) =>
    !VALIDATION_REGEX.url.test(value) ? "Invalid url" : null,
  // fileSize validation support for Yup
  validateFileSize: (files, maximumFileSize = 10 * 1024 ** 2) => {
    let isValid = true;
    files.map((file) => {
      if (file.size > maximumFileSize) {
        isValid = false;
      }
    });
    return isValid;
  },
  // fileType validation support for Yup
  validateFileType: (files, validFileTypes = []) => {
    let isValid = true;
    files.map((file) => {
      if (!validFileTypes.includes(file.type)) {
        isValid = false;
      }
    });
    return isValid;
  },
};

export const COURSES = {
  TYPE: {
    GROUP_LEARNING: {
      KEY: "GL",
      NAME: "Group Learning",
    },
    INDIVIDUAL_LEARNING: {
      KEY: "IL",
      NAME: "Individual Learning",
    },
  },
  LEARNING_METHOD: {
    ONLINE_SELF_LEARNING: {
      KEY: "OSL",
      NAME: "Online Self Learning",
    },
    ONLINE_LIVE_VIRTUAL: {
      KEY: "OLV",
      NAME: "Online Live Virtual",
    },
    OFFLINE: {
      KEY: "OFF",
      NAME: "Offline",
    },
    HYBRID: {
      KEY: "HYB",
      NAME: "Hybrid",
    },
  },
  CATEGORY: {},
};

export const COURSE_CATEGORIES = {
  PL: "Pelatihan",
  PJ: "Penjenjangan",
  SM: "Seminar",
  CRF: "Sertifikasi",
  CH: "Coaching",
};

export const CHAPTER = {
  TYPE: {
    VIDEO: {
      KEY: "VIDEO",
      NAME: "Video",
    },
    QUIZ: {
      KEY: "QUIZ",
      NAME: "Quiz",
    },
    DOCUMENT: {
      KEY: "DOCUMENT",
      NAME: "Article",
    },
    LINK: {
      KEY: "LINK",
      NAME: "Link",
    },
    OTHER: {
      KEY: "OTHER",
      NAME: "Other",
    },
  },
};

export const CLASS = {
  TYPE: {
    BATCH: {
      KEY: "BATCH",
      NAME: "Batch",
    },
    TIER: {
      KEY: "TIER",
      NAME: "Tier",
    },
    NON_CLASS: {
      KEY: "NON_CLASS",
      NAME: "Individual Learning",
    },
  },
};

export const WALLET_TYPES = {
  IW: "Individual Wallet",
  CW: "Corporate Wallet",
  GW: "Group Wallet",
};

export const COURSE_TYPES = {
  IL: "Individual Learning",
  GL: "Group Learning",
};

export const COURSE_METHODS = {
  OSL: "Hanya Online (Self Learning)",
  OLV: "Hanya Online (Live Virtual)",
  OFF: "Hanya Offline",
  HYB: "Hybrid",
};

export const BAST_ROLES = {
  inspector1: "Pemeriksa Pertama",
  inspector2: "Pemeriksa Kedua",
  approver1: "Approver Pertama",
  approver2: "Approver Kedua",
};

export const LIST_OF_SHORT_MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dec",
];

export const MANTINE_INPUT_STYLES = {
  primary: {
    classNames: { label: "text-primary3 mb-1" },
    styles: {
      input: {
        fontSize: "0.875rem",
      },
      label: {
        fontSize: "0.875rem",
      },
      error: {
        fontSize: "0.875rem",
      },
    },
  },
};

export const MANTINE_SWITCH_STYLES = {
  primary: {
    styles: {
      label: {
        fontSize: "0.875rem",
      },
    },
  },
};

export const MANTINE_SELECT_STYLES = {
  primary: {
    classNames: { label: "text-primary3 mb-1" },
    styles: {
      item: {
        fontSize: "0.875rem",
      },
    },
  },
};

export const MANTINE_BUTTON_STYLES = {
  sizeStyles: {
    xs: {
      fontSize: "0.75 !important",
    },
    sm: {
      fontSize: "0.875rem !important",
    },
    md: {
      fontSize: "1rem !important",
    },
    lg: {
      fontSize: "1rem !important",
    },
    xl: {
      fontSize: "1rem !important",
    },
  },
};

export const LIST_OF_SHORT_INDONESIA = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

export const LIST_OF_MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const LIST_OF_MONTH_INDONESIA = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const LIST_OF_DAY_INDONESIA = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

export const LEVELS = Array.from({ length: 7 }, (_, i) => ({
  label: `Level ${i + 1}`,
  value: i + 1,
}));

export const CHARTJS_OPTIONS = {
  BAR: {
    plugins: {
      title: {
        display: true,
        position: "bottom",
        align: "center",
        font: {
          size: 14,
          weight: 400,
        },
        text: "Level",
      },
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          padding: 25,
          boxWidth: 12,
          boxHeight: 12,
          textAlign: "left",
          font: {
            size: 14,
            weight: 600,
          },
        },
      },
    },
    //   maintainAspectRatio: false,
    layout: {
      padding: {
        left: 20,
        right: 20,
      },
    },

    responsive: true,
    scales: {
      x: {
        display: true,
        text: "Months",
        stacked: true,
      },
      y: { display: true, text: "Learning", stacked: true },
    },
  },
};

export const MANTINE_TAB_STYLES = {
  pill: {
    sxChild: (theme) => ({
      background: "white",
      border: `1px solid`,
      borderColor: theme.colors.gray[5],
      color: theme.colors.gray[5],
      fontWeight: 500,
      marginRight: 10,
      "&:disabled": {
        background: `#F2F4F8 !important`,
        color: "#878D96 !important",
        borderColor: "#878D96 !important",
      },
    }),
    sx: {
      "[data-active]": {
        background: `rgba(201, 243, 251, 0.7) !important`,
        color: "rgb(1, 109, 178) !important",
        borderColor: "rgb(1, 109, 178) !important",
      },
    },
  },
  default: {
    sxChild: (theme) => ({
      background: "transparent !important",
      color: theme.colors.gray[5],
      fontWeight: 600,
    }),
    sx: {
      "[data-active]": {
        color: "rgb(1, 109, 178) !important",
        borderColor: "rgb(1, 109, 178) !important",
      },
    },
    className: {
      root: "bg-white",
      tab: "hover:bg-white border-b-3",
      panel: "py-5",
    },
  },
};

export const MANTINE_PAGINATION_STYLES = {
  default: {
    classNames: {
      item: "border-white",
    },
    sx: (theme) => ({
      "[data-active]": {
        background: "white",
        border: `1px solid !important`,
        borderColor: theme.colors.primary[5],
        color: theme.colors.primary[5],
      },
    }),
  },
};

export const NEW_STATUS_COURSE = {
  "PERLU PUBLIKASI": {
    label: "Perlu Publikasi",
    value: "PERLU PUBLIKASI",
    color: "red",
  },
  "MENUNGGU CORPU": {
    label: "Menunggu Corpu",
    value: "MENUNGGU CORPU",
    color: "yellow",
  },

  "DIREVISI CORPU": {
    label: "Direvisi Corpu",
    value: "DIREVISI CORPU",
    color: "red",
  },
  "DITOLAK CORPU": {
    label: "Ditolak Corpu",
    value: "DITOLAK CORPU",
    color: "red",
  },
  "MENUNGGU SUBCON": {
    label: "Menunggu Subcon",
    value: "MENUNGGU SUBCON",
    color: "yellow",
  },

  "BELUM BERJALAN": {
    label: "Belum Berjalan",
    value: "BELUM BERJALAN",
    color: "primary",
  },
  "SEDANG BERJALAN": {
    label: "Sedang Berjalan",
    value: "SEDANG BERJALAN",
    color: "green",
  },
  SELESAI: { label: "Selesai", value: "SELESAI", color: "gray" },
};

export const NEW_STATUS_COURSE_GL = {
  NC: {
    label: "Perlu Dibuat",
    value: "PERLU DIBUAT",
    color: "red",
  },
  NP: {
    label: "Perlu Publikasi",
    value: "PERLU PUBLIKASI",
    color: "red",
  },
  WC: {
    label: "Menunggu Corpu",
    value: "MENUNGGU CORPU",
    color: "yellow",
  },

  RC: {
    label: "Direvisi Corpu",
    value: "DIREVISI CORPU",
    color: "red",
  },
  DC: {
    label: "Ditolak Corpu",
    value: "DITOLAK CORPU",
    color: "red",
  },
  WS: {
    label: "Menunggu Subcon",
    value: "MENUNGGU SUBCON",
    color: "yellow",
  },
  WV: {
    label: "Menunggu Vendor",
    value: "MENUNGGU VENDOR",
    color: "yellow",
  },
  CL: {
    label: "Perlu Dibuat Kelas",
    value: "PERLU DIBUAT KELAS",
    color: "red",
  },
  CH: {
    label: "Perlu Dibuat Chapter",
    value: "PERLU DIBUAT CHAPTER",
    color: "red",
  },

  NS: {
    label: "Belum Berjalan",
    value: "BELUM BERJALAN",
    color: "purple",
  },
  OG: {
    label: "Sedang Berjalan",
    value: "SEDANG BERJALAN",
    color: "green",
  },
  FI: { label: "Selesai", value: "SELESAI", color: "gray" },
};

export const COURSE_STATUS_BADGE_PROPS = {
  WAIT_FOR_COURSE_CREATION: {
    label: "Menunggu Pembuatan Kursus",
    variant: "yellow",
    description:
      "Kursus diajukan oleh Vendor dan belum disetujui oleh Corpu",
  },
  WAIT_FOR_CLASS_CREATION: {
    label: "Menunggu Pembuatan Kelas",
    variant: "yellow",
    description:
      "Kursus telah disetujui oleh Corpu namun belum dibuatkan kelas oleh Vendor",
  },
  WAIT_FOR_CHAPTER_CREATION: {
    label: "Menunggu Pembuatan Chapter",
    variant: "yellow",
    description:
      "Kursus telah dibuatkan kelas namun belum dibuatkan chapter oleh Subcon",
  },
  WAIT_FOR_PUBLISH: {
    label: "Menunggu Publikasi Kursus",
    variant: "yellow",
    description:
      "Kursus sudah memiliki kelas dan chapter menunggu dipublikasi oleh Vendor",
  },
  COURSE_ON_SELLING: {
    label: "Masa Penjualan Kursus",
    variant: "yellow",
    description:
      "Kursus tersedia di Home & Explore dan dapat dibeli oleh Trainee",
  },
  COURSE_ON_GOING: {
    label: "Kursus Sedang Berjalan",
    variant: "blue",
    description: "Proses pembelajaran kursus sedang berjalan",
  },
  POST_COURSE_ON_ADMINISTRATION: {
    label: "Masa Administrasi Pasca Kursus",
    variant: "blue",
    description:
      "Kursus sedang masa pengunggahan hasil kursus, rekap penilaian, dan sertifikat",
  },
  COURSE_ON_BAST: {
    label: "Masa BAST",
    variant: "blue",
    description:
      "Kursus yang proses sudah selesai baik dari segi pembelajaran maupun administrasi",
  },
  COURSE_DONE: {
    label: "Kursus Selesai",
    variant: "gray",
    description:
      "Kursus yang prosesnya sudah selesai baik dari segi pembejalaran maupun administrasi",
  },
  COURSE_DECLINED: {
    label: "Kursus Dibatalkan",
    variant: "red",
    description:
      "Kursus batal dijalankan karena kekurangan peserta kursus",
  },
  COURSE_ARCHIVE: {
    label: "Kursus Diarsipkan",
    variant: "gray",
    description:
      "Kursus dihilangkan dari tampilan daftar kursus, hanya dapat diakses dengan menyalakan filter Kursus Diarsipkan",
  },
};

export const CLASS_STATUS_BADGE_PROPS = {
  WAIT_FOR_COURSE_CREATION: {
    label: "Menunggu Pembuatan Kursus",
    variant: "yellow",
    description:
      "Kursus diajukan oleh Vendor dan belum disetujui oleh Corpu",
  },
  WAIT_FOR_CLASS_CREATION: {
    label: "Menunggu Pembuatan Kelas",
    variant: "yellow",
    description:
      "Kursus telah disetujui oleh Corpu namun belum dibuatkan kelas oleh Vendor",
  },
  WAIT_FOR_CHAPTER_CREATION: {
    label: "Menunggu Pembuatan Chapter",
    variant: "yellow",
    description:
      "Kursus telah dibuatkan kelas namun belum dibuatkan chapter oleh Subcon",
  },
  WAIT_FOR_PUBLISH: {
    label: "Menunggu Publikasi Kursus",
    variant: "yellow",
    description:
      "Kursus sudah memiliki kelas dan chapter menunggu dipublikasi oleh Vendor",
  },
  COURSE_ON_SELLING: {
    label: "Masa Penjualan Kelas",
    variant: "yellow",
    description:
      "Kursus tersedia di Home & Explore dan dapat dibeli oleh Trainee",
  },
  COURSE_ON_GOING: {
    label: "Kelas Sedang Berjalan",
    variant: "blue",
    description: "Proses pembelajaran kursus sedang berjalan",
  },
  POST_COURSE_ON_ADMINISTRATION: {
    label: "Masa Administrasi Pasca Kelas",
    variant: "blue",
    description:
      "Kelas sedang masa pengunggahan hasil kelas, rekap penilaian, dan sertifikat",
  },
  COURSE_ON_BAST: {
    label: "Masa BAST",
    variant: "blue",
    description:
      "Kursus yang proses sudah selesai baik dari segi pembelajaran maupun administrasi",
  },
  COURSE_DONE: {
    label: "Kelas Selesai",
    variant: "gray",
    description:
      "Kelas yang prosesnya sudah selesai baik dari segi pembejalaran maupun administrasi",
  },
  COURSE_DECLINED: {
    label: "Kelas Dibatalkan",
    variant: "red",
    description:
      "Kelas batal dijalankan karena kekurangan peserta kelas",
  },
  COURSE_ARCHIVE: {
    label: "Kursus Diarsipkan",
    variant: "gray",
    description:
      "Kursus dihilangkan dari tampilan daftar kursus, hanya dapat diakses dengan menyalakan filter Kursus Diarsipkan",
  },
};

export const COURSE_PROCUREMENT_STATUS_BADGE_PROPS = {
  DRAFT: {
    label: "Pending",
    variant: "yellow",
    description:
      "Kursus diajukan oleh Vendor dan belum diperiksa oleh Corpu",
  },
  ACCEPTED: {
    label: "Diterima",
    variant: "green",
    description:
      "Pengajuan kursus diterima oleh Corpu dan menunggu pembuatan chapter oleh Subcon",
  },
  REVISION: {
    label: "Direvisi",
    variant: "yellow",
    description:
      "Pengajuan kursus diberi catatan oleh Corpu dan menunggu revisi dari Vendor",
  },
  REVISED: {
    label: "Direvisi",
    variant: "yellow",
    description:
      "Pengajuan kursus diberi catatan oleh Corpu dan menunggu revisi dari Vendor",
  },
  REJECTED: {
    label: "Ditolak",
    variant: "red",
    description: "Pengajuan kursus ditolak oleh Corpu",
  },
  READY_PUBLISH: {
    label: "Siap Dipublish",
    variant: "blue",
    description:
      "Kursus sudah memiliki chapter dan siap dipublish oleh Vendor",
  },
  PUBLISHED: {
    label: "Dipublish",
    variant: "green",
    description:
      "Kursus sudah dipublish dan dapat diakses oleh Trainee",
  },
};
