<template>
  <div>
    <InfoListItem :dataObj="item" :dataIndex="index" :updateDataCallback="updateObjByIndex" v-for="(item,index) in infoList" :key="item"></InfoListItem>
  </div>
</template>

<script>
  import InfoListItem from "./InfoListItem";
  import { generateComputed } from "../store/index";

  const propMixin = {
    computed: {
      ...generateComputed(["infoList"], state => state.myModule.currentData)
    }
  };

  export default {
    name: "InfoList",
    mixins: [propMixin],
    components: {
      InfoListItem
    },
    methods: {
      updateObjByIndex(dataObj, index) {
        console.log('up:',dataObj)
        const target = [...this.infoList];
        target.splice(index, 1, dataObj);
        this.infoList = target;
      }
    },
    computed: {
      // infoList: {
      //   get() {
      //     return this.$store.state.myModule.infoList;
      //   },
      //   set(data) {
      //     console.log("changeInfoList:", data);
      //     this.$store.commit("changeInfoList", data);
      //   }
      // }
    }
  };
</script>
