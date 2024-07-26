import Chart from "chart.js/auto";

export const ChartMixin = {
  methods: {
    createChart(elementId, chartType, labels, data, beginAtZero) {
      const ctx = document.getElementById(elementId);

      this.destroyChart(elementId);

      if (!ctx) {
        return;
      }

      new Chart(ctx, {
        type: chartType,
        data: {
          labels: labels,
          datasets: [
            {
              label: "Label",
              data: data,
              borderWidth: 1,
            },
          ],
        },
        options: {
          devicePixelRatio: 1,
          scales: {
            y: {
              beginAtZero: beginAtZero,
            },
          },
          animation: {
            duration: 0,
          },
        },
      });
    },

    destroyChart(elementId) {
      const ctx = document.getElementById(elementId);
      const chartInstance = Chart.getChart(ctx);
      if (chartInstance) {
        chartInstance.destroy();
      } else {
        console.log(`Chart instance with element ID ${elementId} not found.`);
      }
    },
  },
};
