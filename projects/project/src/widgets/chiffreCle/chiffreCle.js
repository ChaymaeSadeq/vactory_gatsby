import React from "react";
import {Box, Paragraph, Heading} from 'vactory-ui'


const ChiffreCss = {
    fontSize: ['40px', null, '50px'],
    lineHeight: ['40px', null, '50px'],
    color: 'black',
    fontWeight: 900,
}

export const ChiffreCle = ({number, word_before, word_after, description}) => {
    return (
        <Box sx={{
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: 'small',
            borderTopWidth: 'large',
            py: 'large',
            px: 'small',
            textAlign: 'center',
        }}>
            <h1>this is chiffre cle</h1>
            <Box>
                {(word_before || word_after || number) &&
                <Paragraph sx={ChiffreCss}>
                    {word_before &&
                    <Paragraph sx={ChiffreCss} as="span">
                        {word_before}
                    </Paragraph>
                    }
                    {number &&
                    <Paragraph sx={ChiffreCss} mx='xxsmall' as="span">{number}</Paragraph>
                    }
                    {word_after &&
                    <Paragraph sx={ChiffreCss} as="span">
                        {word_after}
                    </Paragraph>
                    }
                </Paragraph>
                }
            </Box>
            {description &&
            <Heading level="3" fontSize="heading5">{description}</Heading>
            }
        </Box>
    )
}