(ns bob)
(use 'clojure.string)

(defn question? [s]
  (ends-with? (trim s) "?"))

(defn yell? [s]
  (and (= (upper-case s) s) (not (= (lower-case s) s))))

(defn response-for [s] ;; <- arglist goes here
  (cond
    (blank? s) "Fine. Be that way!"
    (and (question? s) (yell? s)) "Calm down, I know what I'm doing!"
    (question? s) "Sure."
    (yell? s) "Whoa, chill out!"
    :else "Whatever."))
