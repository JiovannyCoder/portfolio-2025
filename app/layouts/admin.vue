<template>
  <UDashboardGroup>
    <DashboardAppSidebar />
    <UDashboardPanel>
      <template #header>
        <DashboardAppNavbar />
      </template>
      <template #body>
        <slot />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
