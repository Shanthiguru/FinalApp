var React=require('react');
var WeatherChild=require('./WeatherChild');
var fun=false;
var Weather=React.createClass({
  getInitialState :function()
  {
    return({dataArray:[]});
  },
  getDataWithLocation:function()
{
  alert("welcome3");
  console.log("enter point");
  $.ajax({
      url:'http://http://api.openweathermap.org/data/2.5/weather?q='+this.refs.cityBar.value+'&appid=0629f3d037f51ef8a38824e53cf1c9f3',
    dataType:'json',
    async:false,
    type:'GET',
    success:function(data)
    {
      fun=true;
      console.log("DataWithLocation1");
      console.log(data);
      this.setState({dataArray:data});

    }.bind(this),
    error: function(xhr, status, err) {
          console.log("hello bob");
       console.error(err.toString());
     }.bind(this),

  });
  alert("welcome");

},
    render:function()
  {
    var done;
    if(fun)
    {
      done=<WeatherChild data1={this.state.dataArray} />
    }
    console.log("data1");
    console.log(this.state.dataArray);
    return(
            <div className="form-group" id="search">
              <input type="text" className="form-control"  ref="cityBar" placeholder="Search" />

            <button type="submit" onClick={this.getDataWithLocation} className="btn btn-default">ADD</button>
         {done}

            </div>)

  }
})
module.exports=Weather
