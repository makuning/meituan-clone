<template>
    <div class="store-list">
        <div v-for="(item) in store_list" :key="item.id" class="store-list-item">
            <StoreItem :item="item" />
        </div>
    </div>
</template>

<script>
import StoreItem from "./StoreItem.vue"

export default {
    props: ["store_list"],
    components: {
        StoreItem,
    }
}
</script>

<style lang="less" scoped>
.store-list-item {
  margin-top: 10px;
}
</style>
