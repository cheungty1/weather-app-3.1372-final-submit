// Import packages from React, React-Hook-Form, Joi, Joiresolver, React-Bootstrap
import React, { useState, useEffect } from 'react';
import {useForm, Controller} from 'react-hook-form'
import Joi from 'joi'
import {joiResolver} from '@hookform/resolvers/joi'
import {Button, Form} from 'react-bootstrap';

// Footer function - saves component state and store functions to handle functionality of buttons and Joi validation 
function Footer() {
    const [name, setName] = useState(null);
    const [save, setSave] = useState(false);
    const [stylePath1, setStylePath1] = useState('/style1.css');
    const [stylePath2, setStylePath2] = useState('/style2.css');
    const [darkMode, setDarkMode] = useState(false);

    // useEffect - runs after each render of the component where it's called
    // HOOK: ON-LOAD SIDE EFFECTS
    useEffect(() => {
        let save = localStorage.getItem("save")
        if (save === "true") {
            setSave(true);
        } else {
            setSave(false);
        }
        let darkModeValue = localStorage.getItem("darkMode")
        if (darkModeValue === "true") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
        let savedName = localStorage.getItem("name")
        setName(savedName);
    }, [])

    // Function expression - for handling input form changes
    const handleChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    // Function expression - for clearing local storage
    const handleClear = (e) => {
        localStorage.clear()
        setSave(false);
        setDarkMode(false);
    }

    // Function expression - for changing page to default white
    const handleWhite = async (e) => {
        setDarkMode(false);
        localStorage.setItem("darkMode", "false")
    }

    // Function expression - for changing page to dark mode
    const handleBlack = async (e) => {
        setDarkMode(true);
        localStorage.setItem("darkMode", "true")
    }

    // Joi Validation - define schema
    const schema = Joi.object({
        username: Joi.string().min(3).max(256),
       })
    
    // useForm hook - custom hook for managing forms, and for integrating Joi Validation and errors
    const {control, handleSubmit, formState: {errors}} = 
      useForm({
        resolver: joiResolver(schema), 
        defaultValues:{username: ""}})

    // Function expression - for saving name to local storage
    const onSubmit = async(e) => {
            localStorage.setItem("name", name)
            localStorage.setItem("save", true)
            setSave(true);
          }

    // Footer Section
    return (
      <footer className="mt-2 text-center p-3">
        {/* Link - to external stylesheet to set Dark mode */}
        <link rel="stylesheet" type="text/css" href={!darkMode ? stylePath1 : stylePath2} />
        {/* Form */}
        <Form noValidate="noValidate" onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <Form.Group className="mb-3" controlId="username" onChange={handleChange}>
            {/* Username Text Box */}
            {/* The Controller element is used to allow react-hook-forms to work with components*/}
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Enter your Name" />
              )}
            />
            {/* /Username Text Box */}

            {/* Error output */}
            <p className="text-warning">{errors.username?.message}</p>
          </Form.Group>
          {/* /Username */}

          {/* Submit Button */}
          <Button className="big-button w-100 mb-3" variant="primary" type="submit">
            Submit 🚀
          </Button>
          {/* /Submit Button */}
        </Form>
        {/* Display Name and Button Component for clearing name, and toggle light and dark mode */}
        {save && (
          <div>
            Welcome {name}
            <button onClick={handleClear} className="btn btn-primary m-1">
              Clear
            </button>
          </div>
        )}
        <div>
          <button onClick={handleWhite} className="btn btn-light m-1">
            White
          </button>
          <button onClick={handleBlack} className="btn btn-dark m-1">
            Black
          </button>
        </div>
        Weather App &copy; 2023
      </footer>
    );
}

export default Footer;