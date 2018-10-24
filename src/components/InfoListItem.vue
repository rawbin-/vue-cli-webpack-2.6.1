<template>
  <div>Line:sdvdddsdvsdvds
    <input type="text" v-model="currentDataObj.colA"/>
    <input  type="text" v-model="currentDataObj.colB"/>
    <input  type="text" v-model="currentDataObj.colC"/>
    <input  type="text" v-model="currentDataObj.colD"/>
  </div>
</template>

<script>
  export default {
    name: "InfoListItem",
    props: {
      dataObj: {
        type: Object,
        required: true
      },
      dataIndex: {
        type: Number,
        required: true
      },
      updateDataCallback: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        currentDataObj: {
          ...this.dataObj
        }
      };
    },
    watch: {
      currentDataObj: {
        deep: true,
        handler() {
          console.log("update dataObj:", this.currentDataObj);
          this.updateDataCallback.call(null, this.currentDataObj, this.dataIndex);
        }
      }
    }
  };
</script>
