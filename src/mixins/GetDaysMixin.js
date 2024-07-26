export const GetDaysMixin = {
  methods: {
    getLast30Days() {
      const datesArray = [];
      const currentDate = new Date();

      for (let i = 1; i <= 30; i++) {
        const pastDate = new Date(currentDate);
        pastDate.setDate(currentDate.getDate() - i);

        const year = pastDate.getFullYear();
        let month = pastDate.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let day = pastDate.getDate();
        day = day < 10 ? `0${day}` : day;

        const formattedDate = `${year}-${month}-${day}`;
        datesArray.unshift(formattedDate);
      }

      return datesArray;
    },
  },
};
