import React, {useState, useRef} from 'react'
import {Box, Flex, Drop, Anchor} from 'vactory-ui'
import {useTranslation} from "react-i18next"

const DefaultAvatar = ({name}) => {
    return (
        <Box bg={'primary400'} sx={{
            padding: '10px',
            borderRadius: '50%',
            marginRight: '10px',
            width: '37px',
            height: '37px'
        }}>
            {name}
        </Box>
    )
};

const UserAvatarImage = (props) => {
    return (
        <Box
            as='img'
            bg={'primary400'}
             sx={{
            borderRadius: '50%',
            marginRight: '10px',
            width: '37px',
            height: '37px',
        }} {...props} />
    )
};

const DropLink = ({children, hasBorder = true, ...rest}) => {
    return (
        <Anchor
            px="small"
            py="medium"
            borderBottom={hasBorder ? '1px solid' : null}
            borderBottomColor={hasBorder ? 'gray300' : null}
            sx={{
                cursor: 'pointer',
                ':hover': {
                    backgroundColor: 'primary400',
                    color: 'white',
                }
            }}
            {...rest}
        >
            {children}
        </Anchor>
    )
}

export const UserProfile = ({logout, edit, user}) => {
    const {t} = useTranslation();

    const [showDrop, setShowDrop] = useState(false);
    const targetRef = useRef();

    let UserAvatar = () => <DefaultAvatar name={user.name_initial}/>
    if (user.avatar) {
        UserAvatar = () => <UserAvatarImage src={user.avatar} alt={user.name_initial}/>
    }

    return (
        <Box>
            <Flex
                ref={targetRef}
                onClick={() => setShowDrop(!showDrop)}
                alignItems='center'
                justifyContent='center'
                sx={{
                    cursor: 'pointer',
                    padding: '5px 15px',
                    background: '#3c3c3c',
                    color: '#FFF',
                    borderRadius: '25px',
                    marginLeft: '10px'
                }}>
                <UserAvatar />
                <Box>{user.full_name}</Box>
            </Flex>
            {showDrop && <Drop sx={{overflow: 'initial'}}
                               align={{top: 'bottom', left: 'left'}} target={targetRef.current} stretch={true}>
                <Flex sx={{
                    border: '1px solid',
                    borderColor: 'gray200',
                    backgroundColor: 'white',
                    boxShadow: 3,
                    flexDirection: 'column'
                }}>
                    <DropLink
                        target="_blank"
                        href={edit}>
                        {t('Gérer votre compte')}
                    </DropLink>

                    <DropLink
                        onClick={logout}
                        href={'#.'}
                        hasBorder={false}
                    >
                        {t('Se déconnecter')}
                    </DropLink>
                </Flex>
            </Drop>}
        </Box>
    )
};
