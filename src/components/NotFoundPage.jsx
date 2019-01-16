import React from 'react';
import { Link } from 'react-router-dom';
import { HOMEPAGE_ROUTE } from 'constants.js';
import {Container, Button, Header, Form} from 'semantic-ui-react';

export default() => (
 <Container text textAlign='center'>
    <Header as='h1'>Oops!</Header>
    <Header as='h2'>404 Not Found</Header>
    <p>
        Sorry, an error has occurred, Requested page not found!
    </p>
    <Button content={<Link to={HOMEPAGE_ROUTE}>Back to the HomePage</Link>} />
</Container>
);