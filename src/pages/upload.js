import React, { Component } from "react";
import Upload from "components/upload/upload/Upload";
import { Container, theme } from "@hackclub/design-system";
import Card from "@hackclub/design-system/dist/Card";
import styled, { css } from 'styled-components'
import { Headline, Featline } from 'components/Content'


const UploadCard = styled(Card)`
background-color: ${theme.colors.teal[6]};
background-image: radial-gradient(
  ellipse farthest-corner at top left,
  rgb(26, 211, 191),
  rgb(17, 195, 109)
);
`



const UploadPage = () => (
    <div className="App">

    <Container maxWidth={56} px={5} py={2}>
    <Headline>
            Uploader Demo
    </Headline>
        <Featline>
            Drag and drop files, then press Upload.
        </Featline>
    </Container>
    
        <UploadCard m={[3, 4, 4]} px={[3, 3, 3]}>
            <Upload />
        </UploadCard>


    </div>
)

export default UploadPage