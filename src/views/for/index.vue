<template>
  <table cellpadding="0" cellspacing="0" class="clearfix bigTable" id='downloaddata'>
    <tr v-for='(item, index) in table'>
      <template v-for='items in item'>
        <template v-for='(itemss, indexs) in items' v-if='indexs !== "type"'>
          <td>{{itemss}}</td>
        </template>
      </template>
    </tr>
  </table>
</template>
<script>
	export default {
		data() {
		  return{
        table: [
          [
            {
              type: '',
              name: '资产',
              start: '期末余额',
              end: '期初余额'
            },
            {
              type: '',
              name: '负债和所有者权益(或股东权益）',
              start: '期末余额',
              end: '期初余额'
            }
          ],
          [
            {
              type: '',
              name: '资产',
              start: 125000,
              end: 12534567
            },
            {
              type: '',
              name: '负债',
              start: 125000,
              end: 12534567
            }
          ],
          [
            {
              type: '资产',
              name: '货币资金',
              start: 125000,
              end: 12534567
            },
            {
              type: '负债',
              name: '应付短期融资款',
              start: 125000,
              end: 12534567
            }
          ],
          [
            {
              type: '资产',
              name: '其中：客户存款',
              start: 125000,
              end: 12534567
            },
            {
              type: '',
              name: '所有者权益（或股东权益)',
              start: 125000,
              end: 12534567
            }
          ],
          [
            {
              type: '资产',
              name: '',
              start: '',
              end: ''
            },
            {
              type: '所有者权益（或股东权益',
              name: '实收资本（或股本）',
              start: 125000,
              end: 12534567
            }
          ],
          [
            {
              type: '资产',
              name: '资产总计',
              start: 111,
              end: 11
            },
            {
              type: '所有者权益（或股东权益',
              name: '资本公积',
              start: 125000,
              end: 12534567
            }
          ]
        ]
      }
		},
		components: {}
	}
</script>
