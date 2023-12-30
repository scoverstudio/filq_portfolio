json.array! @photos do |p|
  json.extract! p, :id, :name, :link, :height, :width
end
