// Import packages from React, React-Hook-Form, Joi, Joiresolver, React-Bootstrap, React-Router-Dom
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Footer function - Destructure data state nested object properties
function Navbar(props) {
  const { onChange, query, getSearch } = props;

  // Joi Validation - define schema
  const schema = Joi.object({
    search: Joi.string().min(3).max(256)
  });

  // useForm hook - custom hook for managing forms, and for integrating Joi Validation and errors
  const {control, handleSubmit, formState: { errors }} = useForm({
    resolver: joiResolver(schema),
    defaultValues: { search: '' }
  });

  // Navbar Section
  return (
    <React.Fragment>
      {/* Navbar and Navbar Links - to search/home page and about page */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1" to="/">
            🌤 Weather-App
          </Link>
          <Link className="nav-link bg_slider" to="/about">
            About
          </Link>
        </div>
      </nav>

      {/* Search section */}
      <section>
        {/* Form */}
        <div className="container-fluid">
          <Form noValidate="noValidate" onSubmit={handleSubmit(getSearch)}>
            {/* Search */}
            <Form.Group className="mb-3" controlId="search" onChange={onChange}>
              {/* Search Text Box */}
              {/* The Controller element is used to allow react-hook-forms to work with components  */}
              <Controller
                name="search"
                control={control}
                render={({ field }) => (
                  <Form.Control {...field} type="text" placeholder="Enter City" />
                )}
              />
              {/* /search Text Box */}

              {/* Error output */}
              <p className="text-warning">{errors.search?.message}</p>
            </Form.Group>
            {/* /search */}

            {/* Submit Button*/}
            <Button
              className="big-button w-100 mb-5"
              variant="primary"
              type="submit"
              onChange={getSearch}
              value={query}
            >
              Submit 🚀
            </Button>
            {/* /Submit Button */}
          </Form>
          {/* /Form */}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Navbar;
