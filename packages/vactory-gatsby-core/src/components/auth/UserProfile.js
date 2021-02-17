import React from 'react'
import {Link, Dropdown} from 'vactory-gatsby-ui'
import {useTranslation} from "react-i18next"

const DefaultAvatar = ({name}) => {
    return (
        <div className="bg-indigo-400 p-2.5 rounded-full ltr:mr-2.5 rtl:ml-2.5 w-9 h-9">
            {name}
        </div>
    )
};

const UserAvatarImage = (props) => {
    return (
		<img
			alt={props.alt}
			className="inline-block h-10 w-10 rounded-full bg-indigo-400 bg-opacity-50 ltr:mr-2.5 rtl:ml-2.5"
			{...props}
		/>
	);
};

const DropLink = ({props}) => {
    return (
        <Link
            className="hover:text-indigo-400 text-indigo-600"
            {...props}
        />
	);
}

export const UserProfile = ({logout, edit, user}) => {
    const {t} = useTranslation();

    let UserAvatar = () => <DefaultAvatar name={user.name_initial}/>
    if (user.avatar) {
        UserAvatar = () => <UserAvatarImage src={user.avatar} alt={user.name_initial}/>
    }

    return (
		<div>
			<Dropdown
				label={
					<div className="flex border rounded-md">
						<UserAvatar />
						<p>{user.full_name}</p>
					</div>
				}
				items={
					<ul className="flex flex-col space-y-2">
						<li>
							<DropLink target="_blank" href={edit}>
								{t("Gérer votre compte")}
							</DropLink>
						</li>
						<li>
							<DropLink
								onClick={logout}
								href={"#."}
							>
								{t("Se déconnecter")}
							</DropLink>
						</li>
					</ul>
				}
			/>
		</div>
	);
};
