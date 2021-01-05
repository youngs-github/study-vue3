<template>
    <div class="card">
        <div class="title">{{ format() }}</div>
        <div class="content">
            <div class="plate-no">{{ vehicle.plateNo }}</div>
            <div class="desc-info">
                <div class="row">
                    <label class="label">过车时间</label>
                    <div class="content">{{ vehicle.passTime }}</div>
                </div>
                <div class="row">
                    <label class="label">过车地点</label>
                    <div class="content">{{ vehicle.deviceName }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            vehicle: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        setup(props) {
            // 格式化
            const format = () => {
                return props.vehicle.title;
            };

            return {
                format
            };
        }
    };
</script>

<style module lang="scss"></style>
