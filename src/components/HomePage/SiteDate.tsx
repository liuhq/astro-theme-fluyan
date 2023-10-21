import SiteConfig from "#/SiteConfig.ts";
import UserConfig from "#/UserConfig.ts";
import ClockInfo from "#components/HomePage/SiteDate/ClockInfo.tsx";
import EnvInfo from "#components/HomePage/SiteDate/EnvInfo.tsx";
import SiteDateTemplate from "#components/HomePage/SiteDate/SiteDateTemplate.tsx";
import locale from "#lib/locale.ts";
import { Body1Strong, makeStyles, Title3 } from "@fluentui/react-components";
import { Clock48Regular, CloudCheckmark48Regular } from "@fluentui/react-icons";
import { useEffect, useMemo, useState } from "react";

const { homePage } = SiteConfig;
const { siteStartDate } = UserConfig;

export default function SiteDate() {
    const [date, setDate] = useState(locale());
    const styles = useStyles();

    const dateDiff = locale(date).diff(locale(siteStartDate), "day");
    const startOn = locale(siteStartDate).format(homePage.startedOn);

    /* cache diff value */
    const toToday = useMemo(() => dateDiff, [dateDiff]);
    /* real-time digital clock */
    useEffect(() => {
        const timer = setInterval(() => setDate(locale()), 1000);
        return () => clearInterval(timer);
    }, [date]);

    return (
        <div className={ styles.container }>
            <SiteDateTemplate
                children={ <Title3 children={ `${ homePage.runningFor } ${ toToday } ${ homePage.days }` } /> }
                secondaryContent={ <Body1Strong children={ startOn } /> }
                icon={ <CloudCheckmark48Regular /> }
                popover={ <EnvInfo /> }
            />
            <SiteDateTemplate
                children={ <Title3 children={ date.format("HH:mm:ss") } /> }
                secondaryContent={ <Body1Strong children={ date.format(homePage.realDateFormat) } /> }
                icon={ <Clock48Regular /> }
                popover={ <ClockInfo /> }
            />
        </div>
    );
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: "64px"
    }
});
