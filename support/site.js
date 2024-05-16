
const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            upperColor: 'black', 
            upperTextColor: '#f5f5dc',
            bodyColor: '#333', 
            bodyTextColor: '#f5f5dc',
            linkColor: 'yellow'
        }
    },
    methods: {
        changeColor() {
            if (this.bodyColor === '#333') {
                this.upperColor = '#333';
                this.upperTextColor = '#f5f5dc';
                this.bodyColor = 'white';
                this.bodyTextColor = 'black';
                this.linkColor = '#0055ff';
            } else {
                this.upperColor = 'black';
                this.upperTextColor = '#f5f5dc';
                this.bodyColor = '#333';
                this.bodyTextColor = '#f5f5dc';
                this.linkColor = 'yellow';
            }
        }
    }
});
app.mount('#app');