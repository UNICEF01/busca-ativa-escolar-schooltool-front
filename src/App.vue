<template>
  <v-app>
    <core-filter v-show="$route.path!=='/relatorioregiaov2'&&$route.path!=='/relatorioterritoriov2'&&$route.path!=='/relatorioestadov2'"/>

    <core-toolbar v-show="$route.path!=='/relatorioregiaov2'&&$route.path!=='/relatorioterritoriov2'&&$route.path!=='/relatorioestadov2'"/>

    <core-drawer v-show="$route.path!=='/relatorioregiaov2'&&$route.path!=='/relatorioterritoriov2'&&$route.path!=='/relatorioestadov2'"/>

    <core-view />
  </v-app>
</template>

<style lang="scss">
@import "@/styles/index.scss";

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;

}
</style>
