<script setup lang="ts">
import { h, ref, Component } from 'vue';
import { RouterLink } from 'vue-router';
import { 
	NLayout,
	NSpace, 
	NLayoutHeader, 
	NLayoutSider,
	NMenu,
	NIcon,
	NLayoutContent 
} from 'naive-ui'
import {
	HomeOutline as HomeIcon,
	BookOutline as BookIcon,
} from '@vicons/ionicons5'

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
};

const inverted = ref(true);
const menuOptions = [
	{
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Home',
          }
        },
        { default: () => '首頁' }
      ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
	label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Test',
          }
        },
        { default: () => 'Chart' }
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
//   {
//     label: '1973年的弹珠玩具',
//     key: 'pinball-1973',
//     icon: renderIcon(BookIcon),
//     children: [
//       {
//         label: '鼠',
//         key: 'rat'
//       }
//     ]
//   },
//   {
//     label: '寻羊冒险记',
//     key: 'a-wild-sheep-chase',
//     icon: renderIcon(BookIcon)
//   },
//   {
//     label: '舞，舞，舞',
//     key: 'dance-dance-dance',
//     icon: renderIcon(BookIcon),
//     children: [
// 		{
//         label: '饮品',
//         key: 'beverage',
//         icon: renderIcon(WineIcon),
//         children: [
//           {
//             label: '威士忌',
//             key: 'whisky'
//           }
//         ]
//       },
//       {
//         label: '食物',
//         key: 'food',
//         children: [
//           {
//             label: '三明治',
//             key: 'sandwich'
//           }
//         ]
//       },
//       {
//         label: '过去增多，未来减少',
//         key: 'the-past-increases-the-future-recedes'
//       },
//       {
//         type: 'group',
//         label: '人物',
//         key: 'people',
//         children: [
//           {
//             label: '叙事者',
//             key: 'narrator',
//             icon: renderIcon(PersonIcon)
//           },
//           {
//             label: '羊男',
//             key: 'sheep-man',
//             icon: renderIcon(PersonIcon)
//           }
//         ]
//       },
      
//     ]
//   }
]

</script>

<template>
	 <n-space vertical>
		<n-layout>
			<n-layout-header :inverted="inverted" bordered>
				<div style="line-height:40px;padding-left:20px">
					Logo
				</div>
				<!-- <n-menu v-if="isCollapsed" mode="horizontal" :inverted="inverted" :options="menuOptions" /> -->
			</n-layout-header>
			<n-layout has-sider>
				<n-layout-sider
					bordered
					show-trigger
					collapse-mode="width"
					:collapsed-width="64"
					:width="240"
					:native-scrollbar="false"
					:inverted="inverted"
					default-collapsed
					>
						<n-menu
							:inverted="inverted"
							:collapsed-width="64"
							:collapsed-icon-size="22"
							:options="menuOptions"
						/>
				</n-layout-sider>
				<n-layout-content>
					<router-view />
				</n-layout-content>
			</n-layout>
		</n-layout>
	</n-space>
</template>