import java.util.ArrayList;
import java.util.Iterator;
import java.util.TreeSet;

class MyList<E> implements Iterable<E> {
    // ....
    public void add(String item) {
        // ..
    }

    @Override
    public Iterator<E> iterator() {
        return new Iterator<E>() {
            @Override
            public boolean hasNext() {
                return false;
            }

            @Override
            public E next() {
                return null;
            }
        };
    }

}

public class App {
    public static void main(String[] args) {

        ArrayList<String> list = new ArrayList<>(); // iterable object
        list.add("item-1");
        list.add("item-2");
        list.add("item-3");

        TreeSet<String> set = new TreeSet<>(); // iterable object
        set.add("item-1");
        set.add("item-2");
        set.add("item-3");

        MyList<String> myList = new MyList<>();
        myList.add("item-1");
        myList.add("item-2");
        myList.add("item-3");

        // ----------------------------------------------------------------

        // Iterator<String> iterator = set.iterator();
        // while (iterator.hasNext()) {
        // String next = iterator.next();
        // System.out.println(next);
        // }

        // -or

        for (String item : myList) {
            System.out.println(item);
        }

        // ----------------------------------------------------------------

    }
}