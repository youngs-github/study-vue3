<template>
    <div :class="$style['nav-bar']">
        <div
            :class="[$style['nav-item'], { [$style.active]: r.id === active }]"
            v-for="r in list"
            @click="onSelect(r)"
            :key="r.id"
        >
            <router-link :to="r.path">{{ r.name }}</router-link>
        </div>
    </div>
</template>

<script>
    import { reactive, ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { requestNavBar } from '../service';

    export default {
        name: 'NavBar',
        setup() {
            // 列表
            const list = reactive([]);
            const route = useRoute();

            // 活跃
            const active = ref(0);
            // 选中变化
            const onSelect = (route) => {
                active.value = route.id;
            };

            // 请求
            requestNavBar().then((res) => {
                if (res && res.length) {
                    list.push(...res);
                    // 初始化
                    const item = res.find((r) => r.path === route.path);
                    if (item) {
                        active.value = item.id;
                    }
                }
            });

            // 加载完成
            onMounted(() => {
                //
            });

            // 返回
            return {
                list,
                active,
                onSelect
            };
        }
    };
</script>

<style module lang="scss">
    .nav-bar {
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
    }
    .nav-item {
        float: left;
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &.active a {
            color: rgb(255, 102, 0);
        }
    }
</style>
