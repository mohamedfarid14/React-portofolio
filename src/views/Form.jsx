import {Form} from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";
import Select from "react-select";
import './Form.css';

const UserForm = () => {

    const {
        register,
        control,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const formSubmitHandler = (data) => {
        console.log(data);

    }
    const programmingLanguages = [
        {value: "JavaScript", label: "JavaScript"},
        {value: "Python", label: "Python"},
        {value: "NodeJS", label: "NodeJS"}
    ]
    console.log(errors);

    return (
        <div className="container text-start mt-5">
            <Form className="formWrapper w-50" onSubmit={handleSubmit(formSubmitHandler)}>
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label className="labelForm">First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        {...register("firstName", {required: true})}
                    />
                    {
                        errors.firstName && <p className="text-danger fw-bold mt-1">First Name is Required</p>
                    }

                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label className="labelForm">Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        {...register("lastName", {required: true})}
                    />
                    {
                        errors.lastName && <p className="text-danger fw-bold mt-1">Last Name is Required</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className="labelForm" >Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email Address"
                        {...register("email", {required: true})}
                    />
                    {
                        errors.email && <p className="text-danger fw-bold mt-1">Email is Required</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label className="labelForm">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register("password", {required: true})}
                    />
                    {
                        errors.password && <p className="text-danger fw-bold mt-1">Password is Required</p>
                    }
                </Form.Group>

                <div className="mb-3">
                    <Form.Label className="labelForm">Gender</Form.Label>
                    <Form.Check
                        type="radio"
                        value="Male"
                        label="Male"
                        name="gender"
                        {...register("gender", {required: true})}
                    />

                    <Form.Check
                        type="radio"
                        value="Female"
                        label="Female"
                        name="gender"
                        {...register("gender", {required: true})}
                    />
                    {
                        errors.gender && <p className="text-danger fw-bold mt-1">Please choose a Gender!</p>
                    }
                </div>
                <div className="mb-3">
                    <Form.Label className="labelForm">Programming Languages</Form.Label>
                    <Controller name="languages"
                                control={control}
                                rules={{required: true}}
                                render={({field}) =>
                                    <Select
                                        {...field}
                                        options={programmingLanguages}
                                        isMulti
                                    />
                                }
                    />
                    {
                        errors.languages &&
                        <p className="text-danger fw-bold mt-1">Please choose Programming Languages!</p>
                    }
                </div>
                <div className="mb-3">
                    <button className="w-100 btn btn-primary" type="submit">Submit</button>
                </div>
            </Form>
        </div>
    )
}

export default UserForm;