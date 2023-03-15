<template>
    <div class="footer">
        <div class="item">
            <router-link to="/home" class="nav-item" active-class="nav-color">
                <van-icon name="wap-home-o" size="30" />
                首页
            </router-link>
        </div>
        <div class="item">
            <router-link to="/cart" class="nav-item" active-class="nav-color">
                <van-icon name="shopping-cart-o" size="30" />
                购物车
            </router-link>
        </div>
        <div class="item">
            <router-link to="/order" class="nav-item" active-class="nav-color">
                <van-icon name="orders-o" size="30" />
                订单
            </router-link>
        </div>
        <div class="item">
            <router-link to="/mine" class="nav-item" active-class="nav-color">
                <van-icon name="user-circle-o" size="30" />
                我的
            </router-link>
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
.footer {
    display: flex;
    font-size: 12px;
    background-color: #fff;
    border-top: 1px solid #eee;
    .item {
        flex: 1;
        display: flex;
        justify-content: center;
        .nav-item {
            display: flex;
            flex-flow: column;
            align-items: center;
        }
        .nav-color {
            color: #ffc400;
        }
    }
}
</style>
