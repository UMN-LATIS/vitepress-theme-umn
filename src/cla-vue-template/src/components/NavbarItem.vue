<template>
    <li class="navbar-item">
        <slot></slot>
    </li>
</template>



<style scoped>

.navbar-item {
    text-align: center;
    margin-bottom: 0;
    list-style-type: none;
}

.navbar-item:not(:first-child):not(:last-child) {
    flex: 1 0 auto;
}

::v-slotted(.active a) {
    background-color: var(--nav-item-active) !important;
}

::v-slotted(.navbar-item a) {
    font-size: 1rem;
    background-color: var(--light-gray);
    outline-offset: -4px;
    padding: 1rem;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    text-decoration: none;
    color: var(--dark-gray);
    white-space: nowrap;
    transition: background-color 0.2s ease-in-out;
}

::v-slotted(.navbar-item a:hover) {
    background-color: var(--nav-item-active);
    transition: background-color 0.2s ease-in-out;
}

.active a {
    background-color: var(--nav-item-active) !important;
    transition: background-color 0.2s ease-in-out;
}

.navbar-item a {
    font-size: 1rem;
    background-color: var(--light-gray);
    outline-offset: -4px;
    padding: 1rem;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    text-decoration: none;
    color: var(--dark-gray);
    white-space: nowrap;
    transition: background-color 0.2s ease-in-out;
}

.navbar-item a:hover {
    background-color: var(--nav-item-active);
    transition: background-color 0.2s ease-in-out;
}

</style>

<script>
  export default {
    name: 'NavbarItem',
    props: {
    },
    setup() {
       return {
        
       }
    },
  };
</script>