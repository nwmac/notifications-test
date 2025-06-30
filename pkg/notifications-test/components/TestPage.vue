<script>
import TestPanel from './TestPanel.vue';

export default {
  name:       'NotificationCenterTestPage',
  layout:     'plain',
  components: { TestPanel },
};
</script>
<template>
  <div>
    <h1>Notification Center Tests</h1>
    <TestPanel />
  </div>
</template>
<style lang="scss" scoped>
  h1, h3 {
    margin: 20px 0;
    text-align: center;
  }

  h3 {
    color: #2553FF;
    font-weight: bold;
  }
</style>
