import { auth } from "@/firebase/config";
import { useRouter } from "vue-router";

export const UserMixin = {
  methods: {
    auth() {
      const router = useRouter();
      auth.onAuthStateChanged((user) => {
        if (!user) {
          router.push({ name: "Login" });
          history.replaceState(null, "", "/");
        }
      });
    },
  },
};
