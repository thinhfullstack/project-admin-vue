<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import * as yup from 'yup';

const router = useRouter()

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required().max(10),
});

const { defineInputBinds, errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const state = reactive({
    email: defineInputBinds('email'),
    password: defineInputBinds('password')
})

const onSubmit = handleSubmit(form => {
    console.log(form);
    return router.push({name: 'admin.dashboard'})
})

</script>

<template>
<div class="bg-pramary">
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                <div class="card-body">
                                    <form @submit="onSubmit" @blur="onSubmit">
                                        <div class="form-floating mb-3">
                                            <input class="form-control"
                                                :class="{'border-error': errors.email}"
                                                v-bind="state.email" 
                                                name="email" 
                                                id="inputEmail" 
                                                type="email" 
                                                placeholder="name@example.com" 
                                            />
                                            <label for="inputEmail">Email address</label>
                                            <span class="is-valid">{{ errors.email }}</span>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" 
                                                :class="{'border-error': errors.password}"
                                                v-bind="state.password" 
                                                name="password" 
                                                id="inputPassword" 
                                                type="password" 
                                                placeholder="Password" 
                                            />
                                            <label for="inputPassword">Password</label>
                                            <span class="is-valid">{{ errors.password }}</span>
                                        </div>
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" name="remember_pass" id="inputRememberPassword" type="checkbox" value="" />
                                            <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <router-link :to="{ name: 'auth.forgotPassword' }" class="small">Forgot Password?</router-link>
                                            <button class="btn btn-primary">Login</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center py-3">
                                    <div class="small">
                                        <router-link :to="{ name: 'auth.register' }">Need an account? Sign up!</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>
</template>

<style scoped>
.bg-pramary {
    background-color: royalblue;
}

.is-valid {
    color: red;
}

.border-error {
    border: 2px solid red;
}
</style>