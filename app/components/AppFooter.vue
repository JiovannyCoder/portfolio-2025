<template>
  <UFooter class="bg-accented">
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>
     <template #default>
      <p class="text-muted text-sm">
        Créé par Haritina Jiovanny
      </p>
    </template>

    <template #right>
      <UButton variant="ghost" color="neutral" href="mailto:haritinamg@gmail.com" icon="ri-mail-fill"></UButton>
      <UButton variant="ghost" color="neutral" href="https://www.linkedin.com/in/haritina-jiovanny-razafy"
        target="_blank" icon="ri-linkedin-fill"></UButton>
    </template>
  </UFooter>
</template>
