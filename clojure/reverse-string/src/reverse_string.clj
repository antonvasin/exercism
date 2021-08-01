(ns reverse-string)

(defn reverse-string [s] ;; <- arglist goes here
  (reduce (fn [rest char] (str char rest)) (clojure.string/split s #""))
  )
