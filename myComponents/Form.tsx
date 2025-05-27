import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { ScrollView, Text, ToastAndroid, TextInput, TouchableOpacity, View, StyleSheet } from "react-native"
import { z } from 'zod';
type GreetingProps = {
    name: string;
    age?: number;
};
const Greeting = ({ name, age }: GreetingProps) => (
    <div>
        <h1>Hello, {name}</h1>
        {age && <p>Age: {age}</p>}
    </div>
);
function Form() {
    const signUpSchema = z
        .object({
            name: z.string().min(1, "Name is required"),
            email: z.string().email("Invalid email address"),
            password: z.string().min(6, "Password must be at least 6 characters"),
            confirmPassword: z.string().min(6, "Confirm your password"),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords do not match",
            path: ["confirmPassword"], // error goes to confirmPassword field
        });
    type SignUpFormData = z.infer<typeof signUpSchema>;
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
    });
    const onSubmit = (data: SignUpFormData) => {
        console.log("✅ Form Submitted:", data);
        alert(`Account created for ${data.name}`);
        ToastAndroid.show("ssss", 1000);
    };
    // Register fields on mount
    React.useEffect(() => {
        register("name");
        register("email");
        register("password");
        register("confirmPassword");
    }, [register]);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            {/* Name */}
            <TextInput
                placeholder="Full Name"
                onChangeText={(text) => setValue("name", text)}
                style={styles.input}
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

            {/* Email */}
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => setValue("email", text)}
                style={styles.input}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

            {/* Password */}
            <TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setValue("password", text)}
                style={styles.input}
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

            {/* Confirm Password */}
            <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                onChangeText={(text) => setValue("confirmPassword", text)}
                style={styles.input}
            />
            {errors.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword.message}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        marginBottom: 30,
        textAlign: "center",
        color: "#333",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        fontSize: 16,
    },
    error: {
        color: "red",
        marginBottom: 10,
        marginLeft: 5,
    },
    button: {
        backgroundColor: "#0d6efd",
        padding: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
});

export default Form