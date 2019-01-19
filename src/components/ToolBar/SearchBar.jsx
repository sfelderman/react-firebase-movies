import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Form, FormGroup, Button, Container } from 'semantic-ui-react';


const SearchBar = ({searchValue, onEditSearch, onSubmit}) => {
    return (
        <Container fluid text textAlign='center'>
        <Form onSubmit={onSubmit}>
            <FormGroup inline>
                <Form.Input width={8}
                    type='text'
                    name='searchValue'
                    value={searchValue}
                    onChange={onEditSearch}
                    placeholder='Search Movies'
                    autoFocus
                />
                <Button positive>
                    <Link color='grey' to='AddMovie'>
                    Search External
                    </Link>
                </Button>
            </FormGroup>
        </Form>
        </Container>
    );
};

export default SearchBar;