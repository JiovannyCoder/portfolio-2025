<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "Dashboard",
    icon: "ri-dashboard-line",
    to: "/dashboard",
  },
  {
    label: "Blogs",
    icon: "ri-newspaper-line",
    to: "/dashboard/blogs",
  },
  {
    label: "Settings",
    icon: "ri-settings-line",
    to: "/dashboard/settings",
  },
];
</script>

<template>
  <UDashboardSidebar collapsible resizable>
    <template #header="{ collapsed }">
      <div class="flex justify-center w-full">
        <UIcon
          v-if="collapsed"
          name="ri-vuejs-line"
          class="text-primary"
        ></UIcon>
        <Logo v-else />
      </div>
    </template>
    <template #default="{ collapsed }">
      <UNavigationMenu
        :collapsed="collapsed"
        :items="items"
        orientation="vertical"
      />
    </template>
  </UDashboardSidebar>
</template>
