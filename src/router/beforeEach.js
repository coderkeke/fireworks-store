import router from "./index";
import { getQrCode, scanCode } from "@/api";

router.beforeEach((to, from, next) => {
  console.log(app);
  if (to.query.code) {
    console.log(to.query.code);
    const params = {
      code: to.query.code
    };
    scanCode(params).then(res => {
      console.log(res);
    });
  }

  next();
});
