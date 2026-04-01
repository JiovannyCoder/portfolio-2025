<template>
  <UFooter class="bg-neutral-50">
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton variant="ghost" color="neutral" href="mailto:haritinamg@gmail.com" icon="ri-mail-fill"></UButton>
      <UButton variant="ghost" color="neutral" href="https://www.linkedin.com/in/haritina-jiovanny-razafy"
        target="_blank" icon="ri-linkedin-fill"></UButton>
    </template>
  </UFooter>
</template>
