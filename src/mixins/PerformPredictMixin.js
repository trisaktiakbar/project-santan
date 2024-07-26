// File: TensorFlowMixin.js

import * as tf from "@tensorflow/tfjs";
import { loadModel, fetchModel, inverseMinMaxNormalizationAll } from "@/libs/green-api/green-api.js";

export const PerformPredictMixin = {
  methods: {
    async performPredict(modelName, inputModel) {
      try {
        const modelInfo = await fetchModel(modelName);
        console.log(modelInfo);
        const loadedModel = await loadModel(modelInfo.model);

        const inputTensor = tf.tensor3d([inputModel]);

        let predictions = loadedModel.predict(inputTensor);

        predictions = predictions.dataSync();
        predictions = inverseMinMaxNormalizationAll(predictions, modelName);

        return predictions;
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        throw error; // Dilempar kembali untuk menangkap kesalahan di komponen yang menggunakan mixins
      }
    },
  },
};
