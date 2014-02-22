function setUpTangle () {

    var ex1 = document.getElementById("ex1");

    var tangle1 = new Tangle(ex1, {
        initialize: function () {
            this.magnitude = 4
            this.frequency = 1
            this.x_value = 0
            this.x_value_percent = 0
            this.phase = 0
            this.phase_percent = 0
            this.paper = new Raphael(document.getElementById('graph'), 700, 300)
            this.zero_line = this.paper.path( 'M' + (this.paper.width/2 - 15).toString() + ',' + (this.paper.height/2).toString()
                + 'L' + (this.paper.width).toString() + ',' + (this.paper.height/2).toString() )
            this.zero_line.attr( { 'stroke-width': 1, 'stroke': '#888' } )
            this.sine_wave = this.paper.path('')
            this.sine_wave.attr( { 'stroke-width': 1.2 } )
            this.circle = this.paper.circle( 0, 0, 0 )
            this.circle.attr( { 'stroke-width': 1.2 } )
            this.connecting_line = this.paper.rect( 0, 0, 0, 2 )
            this.connecting_line.attr( { 'fill': 'black' } )
            this.circle_point = this.paper.circle( 0, 0, 7 )
            this.sine_point = this.paper.circle( 0, 0, 7 )
        },
        update: function () {
            var n1 = this.magnitude*20
            var width = this.paper.width - 10, height = this.paper.height

            this.circle.attr( { 'cx': 7*20 + 10, 'cy': height/2, 'r': Math.abs(n1) } )

            this.x_value = this.x_value_percent / 100 * 2 * Math.PI
            this.phase = this.phase_percent / 100 * 2 * Math.PI

            this.circle_point.attr( { 'cx': 7*20 + 10 + this.circle.attrs.r*Math.cos(this.x_value*this.frequency + this.phase), 'cy': height/2 + this.circle.attrs.r*Math.sin(-this.x_value*this.frequency - this.phase), 'fill': 'purple' } )
            this.sine_point.attr( { 'cx': width/2 + width/2*(this.x_value / (2*Math.PI)), 'cy': height/2 + this.circle.attrs.r*Math.sin(-this.x_value*this.frequency - this.phase), 'fill': 'purple' } )

            this.connecting_line.attr( { 'x': this.circle_point.attrs.cx, 'y': this.circle_point.attrs.cy, 'width': this.sine_point.attrs.cx - this.circle_point.attrs.cx } )

            var path_str = 'M' + width/2 + ',' + (n1*Math.sin(-2*Math.PI*0 / (width/2)*this.frequency - this.phase) + height/2).toString()
            for(var i = 0; i < width/2; ++i) {
                path_str += 'L' + (width/2 + i).toString() + ',' + (n1*Math.sin(-2*Math.PI*i / (width/2)*this.frequency - this.phase) + height/2).toString()
            }
            this.sine_wave.attr( { 
                'path': path_str
            } )
        }
    });

    var tangle2 = new Tangle(ex2, {
        initialize: function () {
            this.magnitude = 4
            this.frequency = 1
            this.x_value = 0
            this.x_value_percent = 0
            this.phase = 0
            this.paper = new Raphael(document.getElementById('graph-2'), 700, 300)
            this.circle = this.paper.circle( 0, 0, 0 )
            this.circle.attr( { 'stroke-width': 1.2 } )
            this.x_line = this.paper.path( '' )
            this.x_line.attr( { 'stroke': 'red', 'stroke-width': 2 } )
            this.y_line = this.paper.path( '' )
            this.y_line.attr( { 'stroke': 'blue', 'stroke-width': 2 } )
            this.hypotenuse = this.paper.path( '' )
            this.hypotenuse.attr( { 'stroke': 'purple', 'stroke-width': 2 } )
            this.circle_point = this.paper.circle( 0, 0, 7 )
            this.sin_val = 0
            this.cos_val = 0
        },
        update: function () {
            var n1 = this.magnitude*20
            var width = this.paper.width - 10, height = this.paper.height

            this.x_value = this.x_value_percent * 2*Math.PI/100

            this.circle.attr( { 'cx': 7*20 + 10, 'cy': height/2, 'r': Math.abs(n1) } )

            this.circle_point.attr( { 'cx': 7*20 + 10 + this.circle.attrs.r*Math.cos(this.x_value*this.frequency + this.phase), 'cy': height/2 + this.circle.attrs.r*Math.sin(-this.x_value*this.frequency - this.phase), 'fill': 'purple' } )

            this.x_line.attr( { 'path': 'M' + this.circle.attrs.cx.toString() + ',' + this.circle.attrs.cy.toString() + 'L' + this.circle_point.attrs.cx.toString() + ',' + this.circle.attrs.cy.toString() } )
            this.y_line.attr( { 'path': 'M' + this.circle_point.attrs.cx.toString() + ',' + this.circle.attrs.cy.toString() + 'L' + this.circle_point.attrs.cx.toString() + ',' + this.circle_point.attrs.cy.toString() } )
            this.hypotenuse.attr( { 'path': 'M' + this.circle.attrs.cx.toString() + ',' + this.circle.attrs.cy.toString() + 'L' + this.circle_point.attrs.cx.toString() + ',' + this.circle_point.attrs.cy.toString() } )

            this.sin_val = Math.cos( 2*Math.PI * this.x_value )
            this.cos_val = Math.sin( 2*Math.PI * this.x_value )
        }
    });

    var tangle3 = new Tangle(ex3, {
        initialize: function () {
            this.magnitudes = [4, 2]
            this.frequencies = [1, 2]
            this.x_value = 0
            this.x_value_percent = 0
            this.phases = [0, 0]
            this.phases_percent = [0, 0]
            this.paper = new Raphael(document.getElementById('graph-3'), 700, 300)
            this.zero_line = this.paper.path( 'M' + (this.paper.width/2 - 15).toString() + ',' + (this.paper.height/2).toString()
                + 'L' + (this.paper.width).toString() + ',' + (this.paper.height/2).toString() )
            this.zero_line.attr( { 'stroke-width': 1, 'stroke': '#888' } )
            this.sine_waves = [this.paper.path(''), this.paper.path(''), this.paper.path('')]
            this.sine_waves[0].attr( { 'stroke': 'red', 'stroke-width': 2 } )
            this.sine_waves[1].attr( { 'stroke': 'blue', 'stroke-width': 2 } )
            this.sine_waves[2].attr( { 'stroke': 'purple', 'stroke-width': 2 } )
            this.circles = [this.paper.circle( 0, 0, 0 ), this.paper.circle( 0, 0, 0 )]
            this.circles[0].attr( { 'stroke-width': 2, 'stroke': 'red' } )
            this.circles[1].attr( { 'stroke-width': 2, 'stroke': 'blue' } )
            this.connecting_lines = [this.paper.rect( 0, 0, 0, 2 ), this.paper.rect( 0, 0, 0, 2 )]
            this.connecting_lines[0].attr( { 'stroke': 'red', 'fill': 'red' } )
            this.connecting_lines[1].attr( { 'stroke': 'blue', 'fill': 'blue' } )
            this.circle_points = [this.paper.circle( 0, 0, 7 ), this.paper.circle( 0, 0, 7 )]
            this.sine_points = [this.paper.circle( 0, 0, 7 ), this.paper.circle( 0, 0, 7 ), this.paper.circle( 0, 0, 7 )]

            for(var i = 0; i < this.circles.length; ++i) {
                eval('this.phases' + i.toString() + '_percent = ' + this.phases_percent[i].toString())
                // eval('this.phases' + i.toString() + ' = ' + this.phases[i].toString())
                eval('this.magnitudes' + i.toString() + ' = ' + this.magnitudes[i].toString())
                eval('this.frequencies' + i.toString() + ' = ' + this.frequencies[i].toString())
            }
        },
        update: function () {
            for(var i = 0; i < this.circles.length; ++i) {
                // eval('this.phases[' + i.toString() + '] = this.phases' + i.toString() + '_percent')
                eval('this.magnitudes[' + i.toString() + '] = this.magnitudes' + i.toString())
                eval('this.frequencies[' + i.toString() + '] = this.frequencies' + i.toString())
            }
            this.phases[0] = this.phases0_percent * 2*Math.PI / 100
            this.phases[1] = this.phases1_percent * 2*Math.PI / 100
            this.x_value = this.x_value_percent * 2*Math.PI / 100

            var width = this.paper.width - 10, height = this.paper.height
            var colors = ['red', 'blue']

            this.circles[0].attr( { 'cx': 7*20 + 10, 'cy': height/2, 'r': Math.abs(this.magnitudes[0]*20) } )
            for(var i = 1; i < this.circles.length; ++i) {
                this.circles[i].attr( { 'cx': this.circles[0].attrs.cx, 'cy': this.circles[0].attrs.cy, 'r': Math.abs(this.magnitudes[i]*20) } )
            }

            for(var i = 0; i < this.circle_points.length; i++) {
                this.circle_points[i].attr( { 'cx': this.circles[i].attrs.cx + this.circles[i].attrs.r*Math.cos(this.x_value*this.frequencies[i] + this.phases[i]), 'cy': this.circles[i].attrs.cy + this.circles[i].attrs.r*Math.sin(-this.x_value*this.frequencies[i] - this.phases[i]), 'fill': colors[i] } )
            }
            
            var y_val = height/2
            for(var j = 0; j < this.circles.length; ++j) {
                y_val += this.circles[j].attrs.r*Math.sin(-this.x_value*this.frequencies[j] - this.phases[j])
            }

            for(var i = 0; i < this.sine_points.length - 1; ++i) {
                this.sine_points[i].attr( { 'cx': width/2 + width/2*(this.x_value / (2*Math.PI)), 'cy': height/2 + this.circles[i].attrs.r*Math.sin(-this.x_value*this.frequencies[i] - this.phases[i]), 'fill': colors[i] } )
            }
            this.sine_points[this.sine_points.length - 1].attr( { 'cx': width/2 + width/2*(this.x_value / (2*Math.PI)), 'cy': y_val, 'fill': 'purple' } )


            for(var i = 0; i < this.connecting_lines.length; ++i) {
                this.connecting_lines[i].attr( { 'x': this.circle_points[i].attrs.cx, 'y': this.circle_points[i].attrs.cy, 'width': this.sine_points[i].attrs.cx - this.circle_points[i].attrs.cx } )
            }

            for(var wave_num = 0; wave_num < this.sine_waves.length - 1; ++wave_num) {
                var y_val = height/2
                y_val += this.circles[wave_num].attrs.r*Math.sin(-0*2*Math.PI/(width/2)*this.frequencies[wave_num] - this.phases[wave_num])
                var path_str = 'M' + width/2 + ',' + y_val.toString()
                for(var i = 0; i < width/2; ++i) {
                    var y_val = height/2
                    y_val += this.circles[wave_num].attrs.r*Math.sin(-i*2*Math.PI/(width/2)*this.frequencies[wave_num] - this.phases[wave_num])
                    path_str += 'L' + (width/2 + i).toString() + ',' + y_val.toString()
                }
                this.sine_waves[wave_num].attr( { 
                    'path': path_str
                } )
            }

            var y_val = height/2
            for(var j = 0; j < this.circles.length; ++j) {
                y_val += this.circles[j].attrs.r*Math.sin(-0*2*Math.PI/(width/2)*this.frequencies[j] - this.phases[j])
            }
            var path_str_sum = 'M' + (width/2).toString() + ',' + y_val.toString()
            for(var i = 0; i < width/2; ++i) {
                var y_val = height/2
                for(var j = 0; j < this.circles.length; ++j) {
                    y_val += this.circles[j].attrs.r*Math.sin(-i*2*Math.PI/(width/2)*this.frequencies[j] - this.phases[j])
                }
                path_str_sum += 'L' + (width/2 + i).toString() + ',' + y_val.toString()
            }
            this.sine_waves[this.sine_waves.length - 1].attr( { 
                'path': path_str_sum
            } )

        }
    });

    var tangle4 = new Tangle(ex4, {
        initialize: function () {
            this.magnitudes = [4, 2]
            this.frequencies = [1, 2]
            this.x_value = 0
            this.x_value_percent = 0
            this.phases = [0, 0]
            this.phases0_percent = 0
            this.phases1_percent = 1
            this.paper = new Raphael(document.getElementById('graph-4'), 700, 300)
            this.zero_line = this.paper.path( 'M' + (this.paper.width/2 - 15).toString() + ',' + (this.paper.height/2).toString()
                + 'L' + (this.paper.width).toString() + ',' + (this.paper.height/2).toString() )
            this.zero_line.attr( { 'stroke-width': 1, 'stroke': '#888' } )
            this.sine_wave = this.paper.path('')
            this.sine_wave.attr( { 'stroke-width': 2, 'stroke': 'purple' } )
            this.circles = [this.paper.circle( 0, 0, 0 ), this.paper.circle( 0, 0, 0 )]
            this.circles[0].attr( { 'stroke-width': 2, 'stroke': 'red' } )
            this.circles[1].attr( { 'stroke-width': 2, 'stroke': 'blue' } )
            this.connecting_line = this.paper.rect( 0, 0, 0, 2 )
            this.connecting_line.attr( { 'fill': 'black' } )
            this.circle_point = this.paper.circle( 0, 0, 7 )
            this.sine_point = this.paper.circle( 0, 0, 7 )

            for(var i = 0; i < this.circles.length; ++i) {
                eval('this.phases' + i.toString() + ' = ' + this.phases[i].toString())
                eval('this.magnitudes' + i.toString() + ' = ' + this.magnitudes[i].toString())
                eval('this.frequencies' + i.toString() + ' = ' + this.frequencies[i].toString())
            }
        },
        update: function () {
            for(var i = 0; i < this.circles.length; ++i) {
                // eval('this.phases[' + i.toString() + '] = this.phases' + i.toString())
                eval('this.magnitudes[' + i.toString() + '] = this.magnitudes' + i.toString())
                eval('this.frequencies[' + i.toString() + '] = this.frequencies' + i.toString())
            }
            this.phases[0] = this.phases0_percent * 2*Math.PI / 100
            this.phases[1] = this.phases1_percent * 2*Math.PI / 100
            this.x_value = this.x_value_percent * 2*Math.PI / 100

            var width = this.paper.width - 10, height = this.paper.height

            this.circles[0].attr( { 'cx': 7*20 + 10, 'cy': height/2, 'r': Math.abs(this.magnitudes[0]*20) } )
            for(var i = 1; i < this.circles.length; ++i) {
                this.circles[i].attr( { 'cx': this.circles[i - 1].attrs.cx + this.circles[i - 1].attrs.r*Math.cos(this.x_value*this.frequencies[i - 1] + this.phases[i - 1]), 'cy': this.circles[i - 1].attrs.cy + this.circles[i - 1].attrs.r*Math.sin(-this.x_value*this.frequencies[i - 1] - this.phases[i - 1]), 'r': Math.abs(this.magnitudes[i]*20) } )
            }

            this.circle_point.attr( { 'cx': this.circles[this.circles.length - 1].attrs.cx + this.circles[this.circles.length - 1].attrs.r*Math.cos(this.x_value*this.frequencies[this.circles.length - 1] + this.phases[this.circles.length - 1]), 'cy': this.circles[this.circles.length - 1].attrs.cy + this.circles[this.circles.length - 1].attrs.r*Math.sin(-this.x_value*this.frequencies[this.circles.length - 1] - this.phases[this.circles.length - 1]), 'fill': 'purple' } )
            
            var y_val = height/2
            for(var j = 0; j < this.circles.length; ++j) {
                y_val += this.circles[j].attrs.r*Math.sin(-this.x_value*this.frequencies[j] - this.phases[j])
            }
            this.sine_point.attr( { 'cx': width/2 + width/2*(this.x_value / (2*Math.PI)), 'cy': y_val, 'fill': 'purple' } )

            this.connecting_line.attr( { 'x': this.circle_point.attrs.cx, 'y': this.circle_point.attrs.cy, 'width': this.sine_point.attrs.cx - this.circle_point.attrs.cx } )

            var y_val = height/2
            for(var j = 0; j < this.circles.length; ++j) {
                y_val += this.circles[j].attrs.r*Math.sin(-0*2*Math.PI/(width/2)*this.frequencies[j] - this.phases[j])
            }
            var path_str = 'M' + width/2 + ',' + y_val.toString()
            for(var i = 0; i < width/2; ++i) {
                var y_val = height/2
                for(var j = 0; j < this.circles.length; ++j) {
                    y_val += this.circles[j].attrs.r*Math.sin(-i*2*Math.PI/(width/2)*this.frequencies[j] - this.phases[j])
                }
                path_str += 'L' + (width/2 + i).toString() + ',' + y_val.toString()
            }
            this.sine_wave.attr( { 
                'path': path_str
            } )
        }
    });

    var tangle5 = new Tangle(ex5, {
        initialize: function () {
            this.magnitudes = [1.5, 1.5, 1.5, 1.5]
            this.frequencies = [1, 2, 3, 4]
            this.x_value = 0
            this.x_value_percent = 0
            this.phases = [0, 0, 0, 0]
            this.phases0_percent = 0
            this.phases1_percent = 0
            this.phases2_percent = 0
            this.phases3_percent = 0
            this.paper = new Raphael(document.getElementById('graph-5'), 700, 300)
            console.log(this.paper.width/2)
            var line1 = this.paper.path( 'M' + (this.paper.width/2 - 5).toString() + ',0L' 
                                + (this.paper.width/2 - 5).toString() + ',' + this.paper.height.toString())
            line1.attr( { 'stroke': 'amber', 'stroke-width': 2 } )
            var line2 = this.paper.path( 'M' + (this.paper.width/2 - 5 + (this.paper.width-10)/8).toString() + ',0L' 
                                + (this.paper.width/2 - 5 + (this.paper.width-10)/8).toString() + ',' + this.paper.height.toString())
            line2.attr( { 'stroke': 'amber', 'stroke-width': 2 } )
            var line3 = this.paper.path( 'M' + (this.paper.width/2 - 5 + (this.paper.width-10)/4).toString() + ',0L' 
                                + (this.paper.width/2 - 5 + (this.paper.width-10)/4).toString() + ',' + this.paper.height.toString())
            line3.attr( { 'stroke': 'amber', 'stroke-width': 2 } )
            var line4 = this.paper.path( 'M' + (this.paper.width/2 - 5 + 3*(this.paper.width-10)/8).toString() + ',0L' 
                                + (this.paper.width/2 - 5 + 3*(this.paper.width-10)/8).toString() + ',' + this.paper.height.toString())
            line4.attr( { 'stroke': 'amber', 'stroke-width': 2 } )
            this.zero_line = this.paper.path( 'M' + (this.paper.width/2 - 15).toString() + ',' + (this.paper.height/2).toString()
                + 'L' + (this.paper.width).toString() + ',' + (this.paper.height/2).toString() )
            this.zero_line.attr( { 'stroke-width': 1, 'stroke': '#888' } )
            this.sine_wave = this.paper.path('')
            this.sine_wave.attr( { 'stroke-width': 2 } )
            this.circles = [this.paper.circle( 0, 0, 0 ), this.paper.circle( 0, 0, 0 ), this.paper.circle( 0, 0, 0 ), this.paper.circle( 0, 0, 0 )]
            this.circles[0].attr( { 'stroke': 'red' } )
            this.circles[1].attr( { 'stroke': 'blue' } )
            this.circles[2].attr( { 'stroke': 'orange' } )
            this.circles[3].attr( { 'stroke': 'green' } )
            this.connecting_line = this.paper.rect( 0, 0, 0, 2 )
            this.connecting_line.attr( { 'fill': 'black' } )
            this.circle_point = this.paper.circle( 0, 0, 7 )
            this.sine_point = this.paper.circle( 0, 0, 7 )

            for(var i = 0; i < this.circles.length; ++i) {
                eval('this.phases' + i.toString() + ' = ' + this.phases[i].toString())
                eval('this.magnitudes' + i.toString() + ' = ' + this.magnitudes[i].toString())
                eval('this.frequencies' + i.toString() + ' = ' + this.frequencies[i].toString())
            }
        },
        update: function () {
            for(var i = 0; i < this.circles.length; ++i) {
                eval('this.phases[' + i.toString() + '] = this.phases' + i.toString() + '_percent * 2*Math.PI / 100')
                eval('this.magnitudes[' + i.toString() + '] = this.magnitudes' + i.toString())
                eval('this.frequencies[' + i.toString() + '] = this.frequencies' + i.toString())
            }

            this.x_value = this.x_value_percent * 2*Math.PI / 100

            var width = this.paper.width - 10, height = this.paper.height

            this.circles[0].attr( { 'cx': 7*20 + 10, 'cy': height/2, 'r': Math.abs(this.magnitudes[0]*20) } )
            for(var i = 1; i < this.circles.length; ++i) {
                this.circles[i].attr( { 'cx': this.circles[i - 1].attrs.cx + this.circles[i - 1].attrs.r*Math.cos(this.x_value*this.frequencies[i - 1] + this.phases[i - 1]), 'cy': this.circles[i - 1].attrs.cy + this.circles[i - 1].attrs.r*Math.sin(-this.x_value*this.frequencies[i - 1] - this.phases[i - 1]), 'r': Math.abs(this.magnitudes[i]*20) } )
            }

            this.circle_point.attr( { 'cx': this.circles[this.circles.length - 1].attrs.cx + this.circles[this.circles.length - 1].attrs.r*Math.cos(this.x_value*this.frequencies[this.circles.length - 1] + this.phases[this.circles.length - 1]), 'cy': this.circles[this.circles.length - 1].attrs.cy + this.circles[this.circles.length - 1].attrs.r*Math.sin(-this.x_value*this.frequencies[this.circles.length - 1] - this.phases[this.circles.length - 1]), 'fill': 'purple' } )
            
            var y_val = height/2
            for(var j = 0; j < this.circles.length; ++j) {
                y_val += this.circles[j].attrs.r*Math.sin(-this.x_value*this.frequencies[j] - this.phases[j])
            }
            this.sine_point.attr( { 'cx': width/2 + width/2*(this.x_value / (2*Math.PI)), 'cy': y_val, 'fill': 'purple' } )

            this.connecting_line.attr( { 'x': this.circle_point.attrs.cx, 'y': this.circle_point.attrs.cy, 'width': this.sine_point.attrs.cx - this.circle_point.attrs.cx } )

            var y_val = height/2
            for(var j = 0; j < this.circles.length; ++j) {
                y_val += this.circles[j].attrs.r*Math.sin(-0*2*Math.PI/(width/2)*this.frequencies[j] - this.phases[j])
            }
            console.log(this.paper.width/2)
            var path_str = 'M' + width/2 + ',' + y_val.toString()
            for(var i = 0; i < width/2; ++i) {
                var y_val = height/2
                for(var j = 0; j < this.circles.length; ++j) {
                    y_val += this.circles[j].attrs.r*Math.sin(-i*2*Math.PI/(width/2)*this.frequencies[j] - this.phases[j])
                }
                path_str += 'L' + (width/2 + i).toString() + ',' + y_val.toString()
            }
            this.sine_wave.attr( { 
                'path': path_str
            } )
        }
    });

    var drawing = new Raphael(document.getElementById('graph-6'), 700, 300)
    var frame = drawing.rect(0, 0, drawing.width, drawing.height)
    var curve = drawing.path( '' )
    var circles = []
    frame.attr( { 'fill': '#fff' } )
    var num_circles = 16
    var mouse_is_down = false
    var start_y
    for(var i = 0; i < num_circles; ++i) {
        circles.push( drawing.circle( (i+1)*drawing.width/(num_circles + 1), drawing.height/2, 7 ) )
        circles[circles.length - 1].circle_index = i
        circles[circles.length - 1].attr( { 'fill': 'magenta', 'stroke': '#c0f' } )
        circles[circles.length - 1].mouseup( function() { mouse_is_down = false } )
        circles[circles.length - 1].drag( function(dx, dy, x, y) {
            this.attr( { 'cy': start_y + dy } )
            draw()
        }, function() {
            start_y = this.attrs.cy
        }, null )
    }
    frame.mousedown(function(mouse) {
        mouse_is_down = true

        for(var i = 0; i < num_circles; ++i) {
            if(Math.abs(circles[i].attrs.cx - mouse.offsetX) < circles[i].attrs.r) {
                circles[i].attr( { 'cy': mouse.offsetY } )
            }
        }

        draw()
    })
    frame.mouseup(function() {
        mouse_is_down = false
    })
    frame.mousemove(function(mouse) {
        if(mouse_is_down) {
            for(var i = 0; i < num_circles; ++i) {
                if(Math.abs(circles[i].attrs.cx - mouse.offsetX) < circles[i].attrs.r) {
                    circles[i].attr( { 'cy': mouse.offsetY } )
                    draw()
                }
            }
        }
    })

    var draw = function() {
        var x1 = [], y1 = []
        for(var i = 0; i < circles.length; ++i) {
            x1.push( drawing.height/2 - circles[i].attrs.cy )
            y1.push( 0.0 )
        }
        FFT.init( num_circles )
        FFT.fft1d( x1, y1 )

        var path_str = 'M' + circles[0].attrs.cx + ',' + circles[0].attrs.cy
        for(var i = 0; i < circles[circles.length - 1].attrs.cx - circles[0].attrs.cx; ++i) {
            var sum = 0
            for(var j = 0; j < x1.length; ++j) {
                sum += Math.cos(j*i* 2*((x1.length - 1)/(x1.length))*Math.PI/(circles[circles.length - 1].attrs.cx - circles[0].attrs.cx))*x1[j]/(x1.length)
                        - Math.sin(j*i* 2*((x1.length - 1)/(x1.length))*Math.PI/(circles[circles.length - 1].attrs.cx - circles[0].attrs.cx))*y1[j]/(y1.length)
            }

            path_str += 'L' + (i + circles[0].attrs.cx).toString() + ',' + (drawing.height/2 - sum).toString()
        }
        curve.attr( { 'path': path_str } )
    }
    draw()

}