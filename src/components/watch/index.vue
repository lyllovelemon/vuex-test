<template>
  <div>
    <p>FullName:{{fullName}}</p>
    <p>FirstName: <input type="text" v-model="firstName"></p>

    <p>obj.a:{{obj.a}}</p>
    <p>obj.a <input type="text" v-model="obj.a"> </p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fullName: 'lemon',
        firstName: 'David',
        fullName: '',
        lastName: 'lou',
        obj:{
          a:123
        }
      }
    },
    watch: {
      firstName: {
        handler(newName, oldName) {
          this.fullName = newName + ' ' + this.lastName;
        },
        immediate:true
      },
      'obj.a':{
        handler(newName, oldName) {
          console.log('obj.a changed');
        },
        immediate: true,
        // deep:true
      }
    }
  }
</script>

<style lang="less">


</style>
