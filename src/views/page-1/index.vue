<template>
    <div :class="$style['page-1']">
        <div :class="$style['left']">
            <div class="form">
                <div class="form-item">
                    <label class="form-label">号牌号码</label>
                    <div class="form-content">
                        <input type="text" v-model="form.plateNo" />
                    </div>
                </div>
                <div class="form-item">
                    <label class="form-label">号牌颜色</label>
                    <div class="form-content">
                        <input type="text" v-model="form.plateColor" />
                    </div>
                </div>
                <div class="form-item">
                    <label class="form-label">号牌种类</label>
                    <div class="form-content">
                        <select @change="onChange" ref="selectRef">
                            <option value="">请选择</option>
                            <option value="小型车">小型车</option>
                            <option value="大型车">大型车</option>
                            <option value="印钞厂">印钞车</option>
                        </select>
                    </div>
                </div>
            </div>
            <br />
            <div class="button">
                <button class="primary" @click="onSearch">搜索</button>
                <button class="reset" @click="onReset">重置</button>
            </div>
            <br />
            <div class="spinner" v-show="loading">加载中...</div>
        </div>
        <div :class="$style['right']">
            <div class="title">
                <p>{{ title }}</p>
            </div>
            <br />
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <td>姓名</td>
                            <td>日期</td>
                            <td>地址</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="r in result" :key="r.id">
                            <td>{{ r.name }}</td>
                            <td>{{ r.date }}</td>
                            <td>{{ r.address }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-list">
                <card v-for="c in vehicles" :vehicle="c" :key="c.id"></card>
            </div>
        </div>
    </div>
</template>

<script>
    import { reactive, ref, computed, watch } from 'vue';

    import Card from '../../components/layout/card';

    export default {
        name: 'Page1',
        components: { Card },
        setup() {
            // 表单信息
            const form = reactive({
                plateNo: '',
                plateColor: '',
                plateClass: ''
            });
            // 按钮信息
            const loading = ref(false);
            // select
            const selectRef = ref(null);

            // 右侧信息
            const title = computed(() => {
                return `表单信息：${form.plateNo} ${form.plateColor} ${form.plateClass}`;
            });
            // 查询结果
            const result = reactive([]);
            // 车辆列表
            const vehicles = reactive([]);

            // 表单事件
            const onChange = (e) => {
                form.plateClass = e.target.value;
            };
            // 搜索事件
            const onSearch = async () => {
                loading.value = true;
                await new Promise((resolve) => {
                    setTimeout(resolve, 1500);
                }).then(() => {
                    result.push(
                        ...[
                            {
                                id: Math.random()
                                    .toString(36)
                                    .slice(2),
                                date: '2016-05-02',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1518 弄'
                            },
                            {
                                id: Math.random()
                                    .toString(36)
                                    .slice(2),
                                date: '2016-05-04',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1517 弄'
                            }
                        ]
                    );
                    vehicles.push(
                        ...[
                            {
                                id: Math.random()
                                    .toString(36)
                                    .slice(2),
                                title: '王小虎',
                                plateNo: '苏asdf',
                                passTime: '2016-05-02',
                                deviceName: '上海市普陀区金沙江路 1518 弄'
                            },
                            {
                                id: Math.random()
                                    .toString(36)
                                    .slice(2),
                                title: '王小虎',
                                plateNo: '苏asdf',
                                passTime: '2016-05-04',
                                deviceName: '上海市普陀区金沙江路 1517 弄'
                            }
                        ]
                    );
                    // 更新
                    setTimeout(() => {
                        result.pop();
                        vehicles.pop();
                    }, 2000);
                    setTimeout(() => {
                        result[result.length - 1].name = '王小虎222';
                        vehicles[vehicles.length - 1].title = '王小虎222';
                    }, 4000);
                });
                loading.value = false;
            };
            // 重置事件
            const onReset = () => {
                form.plateNo = '';
                form.plateColor = '';
                form.plateClass = '';
            };
            // 号牌种类变化
            watch(
                () => form.plateClass,
                (newVal, oldVal) => {
                    // 用于改变select内容
                    if (newVal === '') {
                        selectRef.value.value = '';
                    }
                }
            );

            return {
                form,
                selectRef,
                loading,
                onChange,
                onSearch,
                onReset,
                title,
                result,
                vehicles
            };
        }
    };
</script>

<style module lang="scss">
    .page-1 {
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
    }
    .left {
        float: left;
        width: 400px;
        height: 100%;
        padding: 10px;
        position: relative;
        box-sizing: border-box;
    }
    .right {
        height: 100%;
        padding: 10px;
        position: relative;
        box-sizing: border-box;
        margin-left: 400px;
    }
</style>
