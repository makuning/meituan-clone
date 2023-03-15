<template>
    <div class="item">
        <img src="../../../assets/11.jpg" alt />
        <div class="item-right">
        <div class="title">{{ item.title }}</div>
        <div class="sales">{{ item.sales }}</div>
        <div class="price">起送费 ￥{{ item.sales }} 免配送费</div>
        <div class="label">
            <div v-for="i in item.label" :key="i.id">{{ i }}</div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ["item"],
}
</script>

<style lang="less" scoped>

.item:not(:first-child) {
  margin-top: 8px;
}
.item {
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  font-size: 10px;
  font-weight: 540;
  img {
    width: 90px;
    height: 90px;
    border-radius: 10px;
    margin-right: 20px;
  }
  .item-right {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    .title {
      font-size: 15px;
    }
    .label {
      display: flex;
      div {
        background-color: #ffc40047;
        padding: 2px 5px;
        border-radius: 5px;
      }
      div:not(:first-child) {
        margin-left: 5px;
      }
    }
  }
}
</style>