import UserConfig from "#/UserConfig.ts";
import AuthorName from "#components/HomePage/AuthorInfo/AuthorName.tsx";
import SocialLink from "#components/HomePage/AuthorInfo/SocialLink.tsx";
import { Avatar, Card, CardHeader } from "@fluentui/react-components";

const { author, bio, email } = UserConfig;

export default function AuthorInfo() {

    return (
        <Card appearance={ "subtle" }
              orientation={ "horizontal" }
              size={ "small" }
        >
            <CardHeader header={ <AuthorName author={ author } bio={ bio } /> }
                        description={ <SocialLink email={ email } /> }
                        image={ <Avatar image={ { src: UserConfig.avatar, alt: "avatar" } } size={ 64 } /> }
            />
        </Card>
    );
}
