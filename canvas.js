var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.fillStyle = 'black';
            ctx.strokeStyle = 'blue';


            // circle object
            var colorArray = ['#4484F4', '#E94538', '#772953'];

            ctx.globalAlpha = 0.5;
            function Circle(x, y, dx, dy, radius){
                var randomNumber = Math.floor(Math.random() * 3)
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.radius = radius;
                this.color = colorArray[randomNumber]

                this.draw = function(){
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    ctx.fillStyle = this.color
                    ctx.fill();
                }

                this.update = function(){
                    this.x += this.dx;
                    this.y += this.dy;

                    if(this.x+this.radius > innerWidth ||  this.x-this.radius < 0){
                        this.dx = -this.dx;
                    }

                    if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
                        this.dy = -this.dy;
                    }
                    this.draw();
                }
            }

            var circleArray = [];

            for(i = 0; i < 50; i++){
                var radius = Math.random()*7 + 3;
                var x = Math.random() * (innerWidth - radius * 2) + radius;
                var y = Math.random() * (innerHeight - radius * 2) + radius;
                var dx =  (Math.random() - 0.5) * 0.2;
                var dy = (Math.random() - 0.5) * 0.5;
                circleArray.push(new Circle(x, y, dx, dy, radius));
            }
            
            console.log(circleArray);
            function animate(){
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, innerWidth, innerHeight);

                // circle.update();
                for(i = 0; i < circleArray.length; i++){
                    circleArray[i].update();
                }
            }

            animate();