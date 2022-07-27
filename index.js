console.log('screening cvs');
const data = [
    {
        name: 'ali', 
        age: 16,
        city: 'abc',
        languages: 'python',
        frameWork: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'ahmad', 
        age: 16,
        city: 'cde',
        languages: 'cpp',
        frameWork: 'Django',
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
    },
    {
        name: 'ahsan', 
        age: 26,
        city: 'dfg',
        languages: 'python',
        frameWork: 'flask',
        image: 'https://randomuser.me/api/portraits/men/70.jpg'
    },
    {
        name: 'mehwish', 
        age: 20,
        city: 'fffs',
        languages: 'python',
        frameWork: 'cv2',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'rida', 
        age: 26,
        city: 'abcqw',
        languages: 'python',
        frameWork: 'tkinter',
        image: 'https://randomuser.me/api/portraits/women/51.jpg'
    }
]


// CV ITERATOR  
function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            if(nextIndex< profiles.length){
                return{
                    value : profiles[nextIndex++],
                    done: false
                }
            }
            else{
                return{
                    done: true
                }
            }
        }
    }
}