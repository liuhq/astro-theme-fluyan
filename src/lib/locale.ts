import dayjs from "dayjs";
import "dayjs/locale/zh-cn.js";
import updateLocale from "dayjs/plugin/updateLocale.js";

dayjs.extend(updateLocale);
dayjs.locale("zh-cn");
dayjs.updateLocale("zh-cn", {
    weekdays: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
});

const locale = dayjs;

export default locale;
