import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, ToastAndroid, Text, TextInput, TouchableOpacity, View } from "react-native"
import { z } from 'zod';

const mySchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"], // error goes to confirmPassword field
    });
type myForm = z.infer<typeof mySchema>;
function Form() {


    const { handleSubmit, setValue, register, formState: { errors } } = useForm({
        resolver: zodResolver(mySchema)
    })
    useEffect(() => {
        register("name");
        register("email");
        register("password");
        register('confirmPassword');
    }, [])

    const [name, setName] = useState<string>("");
    const [err, setError] = useState<string>("");


    function change(txt: string) {
        if (txt.length < 5)
            setError('must be more than 5')
        else {
            setName(txt);
            setError("");
        }
    }

    function save(values: myForm) {
        // ToastAndroid.TOP;
        // ToastAndroid.show(name, 3000);
        // if (name.length < 5)
        //     setError('name must be more than 5 char');
        // else
        //     setError('')
        alert(JSON.stringify(values));



    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            {/* Name */}
            <TextInput onChangeText={(text) => setValue("name", text)}
                placeholder="Full Name"
                style={styles.input}
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
            {/* Email */}
            <TextInput
                placeholder="Email"
                onChangeText={(text) => setValue("email", text)}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

            {/* Password */}
            <TextInput
                onChangeText={(text) => setValue("password", text)}
                placeholder="Password"
                secureTextEntry
                // onChangeText={(text) => setValue("password", text)}
                style={styles.input}
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

            {/* Confirm Password */}
            <TextInput
                onChangeText={(text) => setValue("confirmPassword", text)}
                placeholder="Confirm Password"
                secureTextEntry
                style={styles.input}
            />
            {errors.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword.message}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit(save)}>
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