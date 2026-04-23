<script setup lang="ts">
import { object, string } from "yup"

const { t } = useI18n()

const schema = computed(() => {
  return object({
    name: string()
      .trim()
      .min(3, t('contact.form.name.validation.min', { min: 3 }))
      .required(t('contact.form.name.validation.required')),

    email: string()
      .email(t('contact.form.email.validation.email'))
      .required(t('contact.form.email.validation.required')),

    service: string()
      .required(t('contact.form.service.validation.required')),

    description: string()
      .trim()
      .min(3, t('contact.form.description.validation.min', { min: 3 }))
      .required(t('contact.form.description.validation.required'))
  })
})

const initialState = {
  name: undefined,
  email: undefined,
  service: undefined,
  description: undefined
}
const state = reactive({ ...initialState })

const serviceOptions = computed(() => [
  { label: t('contact.form.service.options.simple_websites'), value: t('contact.form.service.options.simple_websites', 1, { locale: 'fr' }) },
  { label: t('contact.form.service.options.e_commerce'), value: t('contact.form.service.options.e_commerce', 1, { locale: 'fr' }) },
  { label: t('contact.form.service.options.custom_websites'), value: t('contact.form.service.options.custom_websites', 1, { locale: 'fr' }) },
  { label: t('contact.form.service.options.dashboards'), value: t('contact.form.service.options.dashboards', 1, { locale: 'fr' }) },
])

const toast = useToast()

async function onSubmit() {
  execute()
}

const { execute, pending } = useFetch("/api/contact", {
  method: "POST",
  body: state,
  watch: false,
  immediate: false,
  onResponse({ response }) {
    if (response.status === 204) {
      toast.add({
        title: t('contact.alerts.success.title'),
        description: t('contact.alerts.success.description'),
        color: "success"
      })
      // reset form
      Object.assign(state, initialState)
    }
  }
})
</script>

<template>
  <UPageSection id="contact" orientation="horizontal">
    <template #title>
      <h2 class="leading-tight">
        {{ $t('contact.title') }}
      </h2>
    </template>
    <template #description>
      <p>
        {{ $t('contact.description') }}
      </p>
    </template>
    <template #links>
      <UButton size="xl" variant="subtle" to="tel:+261382862245" icon="i-lucide-phone" target="_blank">
      </UButton>
      <UButton size="xl" variant="subtle" href="mailto:haritinamg@gmail.com" icon="ri-mail-line">
      </UButton>
      <UButton size="xl" variant="subtle" href="https://www.linkedin.com/in/haritina-jiovanny-razafy" target="_blank"
        icon="ri-linkedin-line"></UButton>
    </template>
    <UForm :schema="schema" :state="state" class="space-y-4 rounded-2xl md:p-10 sm:p-5" @submit="onSubmit">
      <UFormField :label="$t('contact.form.name.label')" name="name" size="xl">
        <UInput variant="subtle" v-model="state.name" class="w-full" />
      </UFormField>

      <UFormField :label="$t('contact.form.email.label')" name="email" size="xl">
        <UInput variant="subtle" v-model="state.email" class="w-full" />
      </UFormField>

      <UFormField :label="$t('contact.form.service.label')" name="service" size="xl">
        <USelect variant="subtle" v-model="state.service" :items="serviceOptions" class="w-full" />
      </UFormField>

      <UFormField :label="$t('contact.form.description.label')" name="description" size="xl">
        <UTextarea variant="subtle" v-model="state.description" class="w-full" />
      </UFormField>

      <UButton size="xl" class="w-full sm:w-auto justify-center" type="submit" leading-icon="i-lucide-send"
        :loading="pending">
        {{ $t('contact.form.actions.send.label') }}
      </UButton>
    </UForm>
  </UPageSection>
</template>
