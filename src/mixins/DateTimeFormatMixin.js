export const DateTimeFormatMixin = {
  methods: {
    minutesToHour(minutes) {
      if (minutes >= 60) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        if (remainingMinutes === 0) {
          return `${hours} jam`;
        } else {
          return `${hours} jam ${remainingMinutes} menit`;
        }
      } else {
        return `${minutes} menit`;
      }
    },

    formatDate(datetime) {
      datetime = datetime.split("-");

      let day = datetime[2];
      let month = datetime[1];
      let year = datetime[0];

      switch (month) {
        case "01":
          month = "Januari";
          break;
        case "02":
          month = "Februari";
          break;
        case "03":
          month = "Maret";
          break;
        case "04":
          month = "April";
          break;
        case "05":
          month = "Mei";
          break;
        case "06":
          month = "Juni";
          break;
        case "07":
          month = "Juli";
          break;
        case "08":
          month = "Agustus";
          break;
        case "09":
          month = "September";
          break;
        case "10":
          month = "Oktober";
          break;
        case "11":
          month = "November";
          break;
        default:
          month = "Desember";
      }
      return day + " " + month + " " + year;
    },
  },
};
